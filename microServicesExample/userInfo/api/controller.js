'use strict';

var userInfoArray = [];

var controllers = {
    userInfo: function(req, res) {

        // Extraer informacion del Json
        const infoUser = {
           playerId: req.body.playerId,
           region: req.body.region,
           gameId: req.body.gameId
       }

       // Adicional Informacion a un Array en memoria
       userInfoArray.push(infoUser);       

       //Retornar Info
       res.json(infoUser);
   },

   deleteUserInfo: function(req, res) {

        // Extraer ID usuario
        const userId = req.body.playerId;

        let indice = -1;
        indice = userInfoArray.findIndex(user => user.playerId = userId);
        console.log(indice);
        if (indice >= 0) {
            userInfoArray.splice(indice,1);
            res.status(200).json("Usuario Eliminado");
        } else {
            res.status(400).json("El usuario no existe");
        }
   },

   buscarUsuarios: function(req, res) {
       res.json(userInfoArray);
   }
};

module.exports = controllers;