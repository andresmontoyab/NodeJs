const express = require('express');
const app = express();
const routes = require('./routes/saludadorRoute');
const exphbs = require('express-handlebars');

routes(app);
app.use(logMiddleware);
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

function logMiddleware(req,res,next) {
    console.log(req.url);
    next();
};
app.listen(8080); 