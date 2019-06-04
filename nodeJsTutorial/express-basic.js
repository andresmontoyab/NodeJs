const express = require('express');
const app = express();

app.use('*', function (request, response) {
    const {headers, method, originalUrl, body} = request;

    const message = 'Hola Globant';
    const responseBody = {message, headers, method, url: originalUrl, body};

    response.send(responseBody);
})

app.listen(8080);