var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    var query = url.parse(req.url, true).query;
    res.writeHead(200, {"Content-Type":"text/html"});
    res.end("<h1>" + query.nombre + "!</h1>");
});

server.listen(8080);
console.log("Esperando request en el puerto 8080");