'use strict';

var controller = require('./controller');

module.exports = function(app) {
   //  Guardar Info User
   app.route('/userInfo')
       .post(controller.userInfo);
};