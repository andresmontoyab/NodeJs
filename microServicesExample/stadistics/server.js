var express = require('./node_modules/express')
var app = express();
var port = process.env.PORT || 3002;

var routes = require('./api/routes');

const bodyParser = require('./node_modules/body-parser');

app.use(bodyParser.json());

routes(app);
app.listen(port, function() {
   console.log('Server started on port: ' + port);
});