# NodeJS 

* [Concepts](#Concepts)
    * [Why Going Asynchronous](#Why-Going-Asynchronous)
    * [Event Loop](#Event-Loop)


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

