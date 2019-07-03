# Express FrameWork 

* [Express](#Express)
    * [Routers.](#Routers.)
        * [Query Param.](#Query-Param.)
        * [Body Information.](#Body-Information.)
    * [Controllers.](#Controllers.)  
    * [View.](#View.)  
        *[Handlebars](#Handlebars)
    * [Middleware.](#Middleware.)  


## Express

Is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications, is open source software and is too easy to use.

It extends the http interface and provides a router and the ability to register middlewares.

        npm install express --save

To see an exmaple of Express application see the file express-basic.

## Routers.

Refers to determining how application responds to a client request to a particular endpoint, which is a URI( or path) and a specific Http request method (GET, POST, and so on).

Each route can have one or more handler functions, which are executed when the route is matched.

        const express = require('express');
        const app = express();

        app.get('/polls', controller.getAll);
        app.post('polls', controller.create);
        app.delete('polls', controller.delete);
        app.get('/polls/:id', controller.get);

When we use the http method for the routes we can catch the information inside the request.

### Query Param

        const express = require('express');
        const app = express();

        app.get('', function(req, res){
              var name = req.query.name;        // from query param
              res.send(name);          
        })


## Body Information

        const express = require('express');
        const app = express();

        app.get('', function(req, res){
              var name = req.body.name;         // from boddy
              res.send(name);          
        })


## Path Variables

        const express = require('express');
        const app = express();

        app.get('/user/:id', function(req, res){
              var name = req.params.name;         // From path
              res.send(name);          
        })

## Controllers.

The controllers are the action that need to be execute when a specific route is requested and in base of MVC pattern the controllers must be separate of the route and model layers.

## View

## Handlebars

First we must install de dependency

                npm install --save express-handlebars

## Passing value to the view.

## res.locals

Controller      

                res.locals.id = req.params.id;



## Middleware                

One of main express's main features are middleware, and this feature let us think that our application is a line of assemble in which in one side we have the request and in the other side the answer, and the middleware is the software that is going to transform the request in the response.

Also we can chain a lot of middleware.

                function logMiddleware(req,res,next) {
                        console.log(req.url);
                }        

                app.use(logMiddleware);