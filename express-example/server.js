const express = require('express');
const app = express();
const routes = require('./routes/saludadorRoute');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');


routes(app);
app.use(logMiddleware);
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

function logMiddleware(req,res,next) {
    console.log(req.url);
    next();
};
app.listen(8080); 