var express = require('express')
var app = express();
var port = process.env.PORT || 3001;

var routes = require('./api/routes');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

routes(app);
app.listen(port, function() {
   console.log('Server started on port: ' + port);
});