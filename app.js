const express = require("express");         //require express
const mongoose = require("mongoose");       //require mongoose
const bodyParser = require("body-parser");  //require body-parser

const app = express();  //set up an express application

app.use(bodyParser.urlencoded({extended: true})); //use body parser in our application,urlencoded mode is used to parse data sent through an http req,extended:true allows us to post nested objects

//      Connecting with mongoDB database and creating schema and model      //

mongoose.connect('mongodb://localhost:27017/wikiDB');

const articleSchema = new mongoose.Schema ({                   //create a schema for article
  title: String,
  content: String
});

const Article = mongoose.model("Article", articleSchema);      //create a model that complies with the schema for article

////     Targetting all articles present in the collection     ////

app.route("/articles")

.get(function(req, res){
  Article.find(function(err, foundArticles){
    if(!err){
      res.send(foundArticles);
    }
    else{
      res.send(err);
    }
  });
})

.post(function(req, res){
  console.log(req.body.title);
  console.log(req.body.content);
  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content
  });
  newArticle.save(function(err){
    if(!err){
      res.send("Successfully added a new article!");
    }
    else{
      res.send(err);
    }
  });
})

.delete(function(req, res){
  Article.deleteMany(function(err){
    if(!err){
      res.send("Successfully deleted all articles!");
    }
    else{
      res.send(err);
    }
  });
});

////      Targetting a specific article        ////

app.route("/articles/:articleTitle")

.get(function(req, res){
  Article.findOne({title: req.params.articleTitle}, function(err, foundArticle){
    if(!err){
      if(foundArticle){
        res.send(foundArticle);
      }
      else{
        res.send("The requested article is not found.");
      }
    }
    else{
      res.send(err);
    }
  });
})

.put(function(req, res){
  Article.replaceOne(
    {title: req.params.articleTitle},
    req.body,                         //req.body = { title: req.body.title, content: req.body.content}
    function(err, result){
      if(!err){
        res.send("Successfully replaced the article.");
      }
      else{
        res.send(err);
      }
    }
  );
})

.patch(function(req, res){
  Article.updateOne(
    {title: req.params.articleTitle},
    {$set: req.body},
    function(err, result){
      if(!err){
        res.send("Successfully modified the document.");
      }
      else{
        res.send(err);
      }
    }
  )
})

.delete(function(req, res){
  Article.deleteOne(
    {title: req.params.articleTitle},
    function(err){
      if(!err){
        res.send("Successfully deleted the article.");
      }
      else{
        res.send(err);
      }
    }
  )
});

//                        Start the server on port 3000                       //

app.listen(3000,function(){     //start the server
  console.log("Server started successfully");
});
