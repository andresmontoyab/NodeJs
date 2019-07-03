const controller = require('../controllers/saludadorController');

module.exports = function(app) {
    app.get('/saludar', controller.saludar);
    app.get('/despedir', controller.despedir);
    app.get('/usuario/:id', controller.usuarioById);
}
