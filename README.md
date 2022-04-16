# Wiki-Webia-API

I have built a RESTful API in which the server is integrated with a MongoDB database that contains short notes related to Web Development topics and one can utilise this web
service to read, update, add and delete data from this database. This database contains articles in the format: { title: titleName, content: contentMaterial }.
## REST API (REpresentational State Transfer)

It is one of the architectural style for designing APIs. The two most important rules that must be followed to make an API RESTful are stated as follows:
#### 1. Use HTTP request verbs.
   - GET: Analogous to READ
   - POST: Analogous to CREATE
   - PUT, PATCH: Analogous to UPDATE
   - DELETE: Analogous to DELETE
#### 2. Use specific pattern of routes/endpoint URLs
   - In order for an API to be RESTful, we have a specific pattern of endpoints and routes.
   - RESTful routing is a set of standards which aims to map http methods(GET, POST, PUT, PATCH, DELETE) and CRUD actions(CREATE, READ, UPDATE, DELETE) together in a conventional pattern.

## Targetting all articles in the collection

### - GET all articles

####   Postman Window

![PostmanGET1](https://user-images.githubusercontent.com/65439177/163671520-8cc21e46-e3bd-4db8-aaf1-9427176da795.png)

####   Robo3T Window

![Robo3t_initialDB](https://user-images.githubusercontent.com/65439177/163671563-6538578c-f083-474f-9465-eaa44886aff2.png)

### - POST a new article

####   Postman Window

![PostmanPOST1](https://user-images.githubusercontent.com/65439177/163671596-9654f08a-6e17-4cda-af58-2da7de8b0c86.png)

####  Robo3T Window

![Robo3tPOST1](https://user-images.githubusercontent.com/65439177/163671650-c173992d-ad20-4994-98fd-fef079fdc5b1.png)

### - DELETE all articles

####   Postman Window

![PostmanDELETE1](https://user-images.githubusercontent.com/65439177/163671677-56a88992-798b-432c-bb9c-0ded03e74dcf.png)

####  Robo3T Window

![Robo3tDELETE1](https://user-images.githubusercontent.com/65439177/163671688-6c5dd774-91e1-4649-8479-76bbeb105381.png)


## Targetting a specific article

### - GET a specific article

####   Postman Window

![PostmanGET2](https://user-images.githubusercontent.com/65439177/163671710-173b037a-e4ac-4b26-9f96-1b599961a1f0.png)

### - PUT(REPLACE) a specific article

####   Postman Window

![PostmanPUT2](https://user-images.githubusercontent.com/65439177/163671728-ba4096f8-e61a-4137-bb09-f973b7dafe98.png)

####  Robo3T Window

![Robo3tPUT2](https://user-images.githubusercontent.com/65439177/163671758-1f977816-7e19-40ae-837b-003e2b164837.png)

### - PATCH (MODIFY) a specific article

####   Postman Window

![PostmanPATCH2](https://user-images.githubusercontent.com/65439177/163671770-144aabcc-4f9b-4df4-a122-bc07c65b5122.png)

####  Robo3T Window

![Robo3tPATCH2](https://user-images.githubusercontent.com/65439177/163671782-b38e60a8-9cc2-4410-8dcf-be046fb42d24.png)

### - DELETE a specific article

####   Postman Window

![PostmanDELETE2](https://user-images.githubusercontent.com/65439177/163671793-bae2e85b-37c9-4113-916a-189cd867f195.png)

####  Robo3T Window

![Robo3tDELETE2](https://user-images.githubusercontent.com/65439177/163671815-6096e65b-7e9b-443c-a7a2-a1dd8567466f.png)
