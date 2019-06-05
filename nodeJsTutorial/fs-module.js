var fs = require('fs');

var fileName = "./resources/fileExample.txt";
// Uso de FileSystem en forma sincrona.
var resultado = fs.readFileSync(fileName);
console.log(resultado.toString());

// Uso de FileSystem de forma Asyncronica.
fs.readFile(fileName, function(err, data) {
    if(err) throw err;
    console.log(data.toString())
})
