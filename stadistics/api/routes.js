'use strict';

var controller = require('./controller');

module.exports = function(app) {
    //  Guardar Info User
    app.route('/stadisticsInfo')
       .post(controller.stadisticsInfo);
    
    app.route('/deleteStadistics')
        .delete(controller.deleteStadistics);

    app.route('/getStadistics')
        .get(controller.getStadistics);
};