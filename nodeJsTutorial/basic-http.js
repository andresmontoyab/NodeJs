var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("<h1>Hola Mundo!</h1>")
})

server.listen(8080);

console.log("Esperando request en el puerto 8080")