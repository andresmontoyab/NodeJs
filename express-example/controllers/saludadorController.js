
function saludar(req, res) {
    res.render('saludo', {message: 'Andres'});
}

function despedir(req, res) {
    var nombre = req.query.nombre;
    res.send("Chau " + nombre);
}

function usuarioById(req, res) {
    var idUsuario = req.params.id;
    res.send("Usario " + idUsuario);
}

module.exports = {
    saludar: saludar,
    despedir: despedir,
    usuarioById: usuarioById,
}