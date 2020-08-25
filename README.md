# NodeJS 

* [What is Node JS](#What-is-Node-JS)
    * [Why Going Asynchronous](#Why-Going-Asynchronous)
    * [Event Loop](#Event-Loop)
    * [Require Tools](#Require-Tools)
        * [npm](#npm)
    * [Modules](#Modules)
    * [Middleware](#Middleware)
* [Http](#Http)
    * [Request Object](#Request-Object)
    * [Response Object](#Response-Object)
* [Event](#Event)
    * [Event Emiter](#Event-Emiter)
    * [Socket.io](#socket.io)
* [Debugging](#Debugging)
    * [Node Inspect](#Node-Inspect)
* [Testing](#Testing)
    * [Mocha](#Mocha)
* [Streams](#Streams)
    * [Readable Streams](#Readable-Streams)
    * [Writable Streams](#Writable-Streams)
* [Logging.](#Logging)
* [Config Management.](#Config-Management)
* [Publishing npm packages.](#Publishing-npm-packages.)
* [Scaling.](#Scaling.)
* [Database](#Database)
    * [Mongo](#Mongo)
    * [Redis.](#Redis)
* [Express](#Express)
    * [Routers](#Routers)
        * [Query Param](#Query-Param)
        * [Body Information](#Body-Information)
        * [Path Variables](#Path-Variables)
    * [Controllers](#Controllers)  



## What is Node JS

1. Is not a programming language.
2. Node is an application container, that executed JS code.
3. Is built with a JS interpeter called v8, that is in Google chrome.
4. NodeJs is executed in one single thread in an asynchronous way.

Node.js uses an event-driven, non blocking I/O model that makes it lightweight and efficient.

Some example Node.js use cases.

1. Restful WebServer using express.
2. Realtime web application(using websockets.)
3. Desktop apps (using electron.)

## Why Going Asynchronous

Classical Web Servers

1. Block the application while waiting I/O.
2. Long running connection or I/O operations have to finish before another request can be processed.
3. Mitigation: Spinning up more instances of the process or more VMS.

Node.js

1. Solves this problem by using non-blocking I/O model.
2. While waiting for I/O for some requests, other requests can be handled.
3. Makes more simultaneous request and long running connections possible.

## Event Loop

The core of Node.js is event loop which process the events.

![](https://github.com/andresmontoyab/microServicesNodeJS/blob/master/resources/eventLoop.PNG) 

1. For each type of event callback can be registered.
2. Callbacks are triggered once an event occurs.
3. Implementation : main process with a pool of workers instead.

## Require Tools

The next list of tools are require to work with nodejs.

### Npm

Node Package Managers.

Is a global public package repository for Node.js

Dependency management: each package has its own independent dependency tree. This avoid version conflicts between different packages.

1. With the following command we can see all the dependencies in the application.

```sh
npm list.
```

2. To delete one dependency of the application you can use the next command

```sh
npm uninstall <dependency_name> --save
```

3. The dependecies could be install global or local, globan means that all my application can use this dependency:

```sh
npm install -g node-inspector
```

4. List all the dependencies install with global level.

```sh
npm -g list --depth=1
```

## Modules

All the node ecosystem is based in modules.

There are three types of modules.

1. Core: The modules system
2. Community: The modules created by the community that you can import with npm
3. Own: The modules that you create in order to build your app.

To export our own modules we can use the next syntax.

```js
// in a file call module.js
module.exports = "hello world";
```

From another module I can use the previous create module.

```js
var module = require('./module');
console.log(module)
```

In javascript i can also export functions.

```js
function discard(message) {
    console.log(message)
};

module.export = discard;
```

Import function

```js
var module = require('./module');
module("hola");
```

Another way to export module is the next:

```js
exports.destacar = destacar;
```

One important thing to highlight here is that in your application you can not use both exports way, your code must be consistent and only use one of both.

## Middleware

Middleware functions are functions that have access to the request object(req), the response object(res) and the next function in the application's request-response cycle. The next function is a function in the express router which, when invoked, executes the middleware succeeding the current middleware.

Middleware function can perform the following tasks.

1. Execute any code.
2. Make changes to the request and the responses.
3. End the request-response cycle.
4. Call the next middleware in the stack.

```js
var myLogger = function(req, res, next ) {
    console.log('LOGGED');
    next();
}

app.use(myLogger);
```

## Http

The http module is a low level core library which provides all necesary tools for building a http server.
 - The interface is simple and accepts a callback which is called on each request the server receives
 - Two arguments are passed to the callback: the request and the response object
 - Everything written to the response object will be send to the client

 ```js
const server = require('http').Server(app);
```

### Request Object

Contains all infromation sent by the cliente. It implements the readable stream interface and if data is send in the body it can be read as a stream.
 - headers send by the request.
 - method HTTP method
 - url url requested.
 - on('data') streamed data of the request body.


### Response Object

Contains all information to be sent to the client. It implements the writeable stream interface.
 - setHeaders(name,value) set response headers
 - end(data) send data in body
 - statusCode defines HTTP status code.


## Event

### Event Emiter

Events is a core module and can be used for event driven programming. this pattern resamples the event system of the client side browser DOM.

Event listeners can be registered for a specific level.

Events can be emitted and arbitrary variables can be passed as payload.

```js
const EventEmitter = require('events');

const myEmitter = new EventEmitter();
myEmitter.on('event', (data) => {
    console.log('an event ocurred!');
});

myEmitter.emit('event', data);
```

### socket.io

Socket.io is a JavaScript library for realtime web applications.

While event emitters can only send messaeg within your server code, socket.io provides the possibility to bidirectional send events between the client and the server.

socket.io uses the http module to establish a realtime connection with the client.

```js
var app = require('http').createServer(handler);
var io = require('socket.io')(app);

app.listen(80);

io.on('connection', function(socket) {
    socket.emit('news', {hello: 'world'});      // emit information
    socket.on('my other event', function(data) { // receive information
        console.log(data);
    });
});
```

## Debugging

### Node Inspect

Using Chrome Debuggin protocol.

```sh
node --inspect nameFileToDebug
```

Opens a port to which Chrome DevTools can connect and you can debug as if the JavaScript code would run in your browser.

When you run the command inspect you have to go to chrome + f12 and in there's a green button in which you could put the breakpoint for the nodejs app.

## Testing

### Mocha

Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser making asynchronous testing simple and fun.

```sh
npm install --save-dev mocha
```

Run test:

```sh
npm test
```

Also in package.json -> script -> test should look like:

```js
"scripts": {
    "test": "mocha"
}
```
## Streams

Streams are best used for processing huge amounts of data. Especially when data needs to be moved from some I/O bound source to another one.

There are four fundamental stream types within NodeJs.

1. Readable - Streams from which data can be read (For example fs.createReadStream()).
2. Writable - Streams to which data can be written (for example fs.createWriteStream()).
3. Duplex - Streams that are both readable and writeable.(For example net.Socket.)
4. Transform - duplex streams that can modify or transform the data as it is written and read (for example zlib.createDeflate()).

### Readable Streams

1. Http responses, on the client.
2. Http request, on the server
3. fs read streams
4. zlib streams
5. crypto streams
6. TCP sockets.
7. child process stoudt and stderr
8. process.stdin

### Writable Streams

1. Http request, on the client.
2. Http responses, on the server
3. fs write streams
4. zlib streams
5. crypto streams
6. TCP sockets.
7. child process stdin
8. process.stdin, process stderr

## Deploying

## Logging

1. Helps later on to debug issues with deployed code.
2. Should provide log levels for filtering purpose.
3. Buyan logs in json format: easy log parsing.

```js
npm install --save bunyan
```

Also you should to create the bunyan and log object.

```js
const bunyan = require('bunyan');
const log = bunyan.createLogger({name: 'logger'});

log.info({ port: 1000});
```

## Config Management

Helps to support different deployment environment.

Should be configurable:

1. Ports.
2. Database connections details.
3. Secrets (Encryption keys, etc.)
4. Performance tweaking.

```sh
npm install --save node-config-manager
```

You should define in your config folder JSON with the information that you need in your application, also is very important to notice that depends of the environment the files are going to be override.

With this file you can set up different properties for dev, qa, prod.

## Publishing npm packages

Creating a user

```sh
npm adduser
```

Updating the package:

```sh
npm version <patcj | minor | major>
```

Publishing the package:

```sh
npm publish.
```

## Scaling

Node.js is single threaded by default, this CPU intensive task wont scale well. Once your scaling issues get CPU bound, new threads or processes needs to be spawned in order to continue scaling.

Solutions

1. Cluster Module: The core module cluster can launch worker threads which can deal with request to the server. Even though for simple tasks this might be enough. this module hasn't proven reliable in production. To see this approach review the JS file cluster.js

2. Docker: The best way to use all the cores available is to dockerize your application and externalize the processing.

To see the second approach you must to create a dockerfile inside the folder you want to deploy.

## Database

### Mongo

To use mongo db with node.js we need a driver, this driver was developed by the mongo team and its name is node-mongodb-native.

Install

```sh
npm install --save mongodb
```

Basic connection

```js
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err,base) {
        if(err) {
        console.log(err);
        return;
}
        var usuarios = base.collection('usuarios');
})
```

### Redis

Redis is an open source (BSD Licensed), in memory data structure store, used as a database, cache and message broker. It supports data structures such as string, hashes, lists, sets, sorted sets with range queries , bitmaps, hyperlogs and geospatial indexes with radius queries.

```sh
npm install ioredis --save.
```

Is a performance oriented library to interface with redis.

The most important redis command are SET, GET , INCR.

Redis can store only Strings, so if you want to store complex values you have to serialize the data with JSON.stringify.

```js
var Redis = require('ioredis');
var redis = new Redis();

redis.set('foo', 'bar');
radis.get('foo', function(err, result) {
    console.log(result);
});
```


## Express

Is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications, is open source software and is too easy to use.

It extends the http interface and provides a router and the ability to register middlewares.

```sh
npm install express --save
```

```js
const express = require('express');
const app = express();

app.use('*', function (request, response) {
    const {headers, method, originalUrl, body} = request;
    const message = 'Hello World';
    const responseBody = {message, headers, method, url: originalUrl, body};
    response.send(responseBody);
})

app.listen(8080);
```

## Routers.

Are use to redirect a client request to a particular endpoint, which is a URI( or path) and a specific Http request method (GET, POST, and so on).

Each route can have one or more handler functions, which are executed when the route is matched.

```js
const express = require('express');
const app = express();

app.get('/polls', controller.getAll);
app.post('polls', controller.create);
app.delete('polls', controller.delete);
app.get('/polls/:id', controller.get);
```

When we use the http method for the routes we can catch the information inside the request.

### Query Param

```js
const express = require('express');
const app = express();

app.get('', function(req, res){
        var name = req.query.name;        // from query param
        res.send(name);          
})
```

### Body Information

```js
const express = require('express');
const app = express();

app.get('', function(req, res){
        var name = req.body.name;         // from boddy
        res.send(name);
})
```

### Path Variables

```js
const express = require('express');
const app = express();

app.get('/user/:id', function(req, res){
        var name = req.params.name;         // From path
        res.send(name);
})
```

## Controllers

The controllers are the action that need to be execute when a specific route is requested and in base of MVC pattern the controllers must be separate of the route and model layers.

## Body-parser  

Body parser is one of the most used it middlewares in express, body parser help us to translate de body from request to json in javascript.

Installation

```sh
npm install --save body-parser
```

Use it.

```js
app.use(bodyParser.json());
```

The last line help to translate the request to json format.
