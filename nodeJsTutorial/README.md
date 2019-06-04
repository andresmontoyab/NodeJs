# NodeJS 

* [Concepts](#Concepts)
    * [Why Going Asynchronous](#Why-Going-Asynchronous)
    * [Event Loop](#Event-Loop)
    * [Require Tools](#Require-Tools)
        * [node](#node)
        * [npm](#npm)
    * [Callbacks](#Callbacks)
    * [Asyncs.js](#Asyncs.js)
    * [Promises](#Promises)
    * [Middleware](#Middleware)
* [Require-Interfacing](#Require-Interfacing)
* [Http](#Http)
* [Express](#Express)
    * [Routing.](#Routing.)
* [Storing](#Storing)
    * [Redis.](#Redis.)
* [Event.](#Event.)
    * [Event Emiter](#Event-Emiter)
    * [Socket.io.](#socket.io)
* [Debugging and Testing](#Debugging-and-Testing)
    * [Mocha.](#Mocha)
    * [Node Inspect.](#Node-Inspect)
* [Streams.](#Streams)
    





# Concepts.

1. Node.js uses an event-driven, non blocking I/O model that makes it lighrweight and efficient.

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

# Require Tools

The next list of tools are require to work with nodejs.

## Node.js

Is the basis tool that we need.

## Npm

Node Package Managers.

Is a global public package repository for Node.js 

Dependency management: each package has its own independent dependency tree. This avoid version conflicts between different packages.

## Callbacks

Callbacks are functions which are passed to other functions which invoke operations and are called upon termination of this operation.

This function can invoke other operations and register more callbacks.

        function add(a,b, callback) {
            return callback(a+b);
        }

        add(a,b, function(result) {
            console.log("the result is ' + result);
        });

There is a handle error conventions.

        {err, values} => {
            if(err){ // Always have to check for errors
                //Handle error
                return 
            }
        }

## Asyncs.js

Helps to organize complex structure into something legible.

1. Complex control structures can be modeled by passing arrays of callbacks.
2. series -> Execute callback in series.
3. parallel -> Execute callback in parallel.
4. waterfall -> pass result of one callback to the next one.
5. map -> async equivalent of Array.proptypes.map

install 

        npm install async --save

Example: 

        var async = require("async");

        function doSomething(callback) {
            setTimeout(() => callback(null,1), 100);
        }

        function doSomethingElse(callback) {
            setTimeout(() => callback(null,2), 100);
        }

        function doSomeMore(callback) {
            setTimeout(() => callback(null,3), 100);
        }

        async.parallel([doSomething, doSomethingElse, doSomeMore], (err, values) => {
            if (err) {
                console.log(err);
                return
            }

            console.log(values);
        });


## Promises

1. Wrap async results in ordinary variable.
2. Can be resolved or rejected at any time.
3. Chainable.
4. Promise.all.

![](https://github.com/andresmontoyab/microServicesNodeJS/blob/master/resources/promisesFlow.PNG) 

## Middleware

Middleware functions are functions that have access to the request object(req), the response object(res) and the next function in the application's request-response cycle. The next function is a function in the express router which, when invoked, executes the middleware succeeding the current middleware.

Middleware function can perform the following tasks.

1. Execute any code.
2. Make changes to the request and the responses.
3. End the request-response cycle.
4. Call the next middleware in the stack.

        var myLogger = function(req, res, next ) {
            console.log('LOGGED');
            next();
        }

        app.use(myLogger);

## Require-Interfacing

1. Code should be organized in modules.
2. NodeJs follows commonJS specification.
3. exports or module.exports for exposing functionality and require() for import.

        module.exports = function (options) {
            // your module entry point here
        }


        exports.foo = function (options) {
            // foo functions exported.
        }

To import:

var fs = require('fs');
var net = require('net');
var http = require('http');
var os = require('os');

## Http

The http module is a low level core library which provides all necesary tools for building a http server.

The interface is simple and accepts a callback which is called on each request the server receives. Two arguments are passed to the callback: the request and the response object. Everything written to the response object will be send to the client.

        const server = require('http').Server(app);

* Request Object

Contains all infromation send by the cliente. It implements the readable stream interface and if data is send in the body it can be read as a stream.

        .headers headers send by the request.
        .method HTTP method.
        .url url requested.
        .on('data') streamed data of the request body.

* Response Object

Contains all information to be send to the client. It implements the writeable stream interface.

        .setHeaders(name,value) set response headers
        .end(data) send data in body
        .statusCode defines HTTP status code.

## Express

Is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications, is open source software and is too easy to use.

It extends the http interface and provides a router and the ability to register middlewares.

        npm install express --save

To see an exmaple of Express application see the file express-basic.

## Routing.

Refers to determining how application responds to a client request to a particular endpoint, which is a URI( or path) and a specific Http request method (GET, POST, and so on).

Each route can have one or more handler functions, which are executed when the route is matched.

        const express = require('express');
        const app = express();

        app.get('/polls', controller.getAll);
        app.post('polls', controller.create);
        app.delete('polls', controller.delete);
        app.get('/polls/:id', controller.get);

## Storing

## Redis

Redis is an open source (BSD Licensed), in memory data structure store, used as a database, cache and message broker. It supports data structures such as string, hashes, lists, sets, sorted sets with range queries , bitmaps, hyperlogs and geospatial indexes with radius queries.

        npm install ioredis --save.

Is a performance oriented library to interface with redis. 

The most important redis command are SET, GET , INCR.

Redis can store only Strings, so if you want to store complex values you have to serialize the data with JSON.stringify.


        var Redis = require('ioredis');
        var redis = new Redis();

        redis.set('foo', 'bar');
        radis.get('foo', function(err, result) {
            console.log(result);
        });


# Event

## Event Emiter

Events is a core module and can be used for event driven programming. this pattern resamples the event system of the client side browser DOM.

Event listeners can be registered for a specific level.

Events can be emitted and arbitrary variables can be passed as payload.

        const EventEmitter = require('events');

        const myEmitter = new EventEmitter();
        myEmitter.on('event', (data) => {
            console.log('an event ocurred!');
        });

        myEmitter.emit('event', data);


## socket.io

Socket.io is a JavaScript library for realtime web applications.

While event emitters can only send messaeg within your server code, socket.io provides the possibility to bidirectional send events between the client and the server.

socket.io uses the http module to establish a realtime connection with the client.

        var app = require('http').createServer(handler);
        var io = require('socket.io')(app);

        app.listen(80);

        io.on('connection', function(socket) {
            socket.emit('news', {hello: 'world'});      // emit information
            socket.on('my other event', function(data) { // receive information
                console.log(data);
            });
        });

## Debugging and Testing

## Mocha

Mocha is a feature-rich JavaScript test framework running on Node.js and in the browsert making asynchronous testing simple and fun.

        npm install --save-dev mocha

Run test:

        npm test.

Also in package.json -> script -> test should look like:

        "scripts": {
            "test": "mocha"
            }

## Node Inspect            

Using Chrome Debuggin protocol.

        node --inspect nameFileToDebug

Opens a port to which Chrome DevTools can connect and you can debug as if the JavaScript code would run in your browser.

When you run the command inspect you have to go to chrome + f12 and in there's a green button in which you could put the breakpoint for the nodejs app.

## Streams

Streams are best used for processing huge amounts of date. Especially when data needs to be moved from some I/O bound source to another one.

There are four fundamental stream types within NodeJs.

1. Readable - Streams from which data can be read (For example fs.createReadStream()).
2. Writable - Streams to which data can be written (for example fs.createWriteStream()).
3. Duplex - Streams that are both readable and writeable.(For example net.Socket.)
4. Transform - duplex streams that can modify or transform the data as it is written and read (for example zlib.createDeflate()).

* Readable Streams:

1. Http responses, on the client.
2. Http request, on the server
3. fs read streams
4. zlib streams
5. crypto streams
6. TCP sockets.
7. child process stoudt and stderr
8. process.stdin

* Writable Streams:

1. Http request, on the client.
2. Http responses, on the server
3. fs write streams
4. zlib streams
5. crypto streams
6. TCP sockets.
7. child process stdin
8. process.stdin, process stderr 