'use strict';

var statdisticsInfoArray = [];

var controllers = {
    stadisticsInfo: function(req, res) {

        // Extraer informacion del Json
        const statdisticsInfo = {
           playerId: req.body.playerId,
           region: req.body.region,
           initialDate: req.body.initialDate,
           finalDate: req.body.finalDate,
           gameId: req.body.gameId
       }

       // Adicional Informacion a un Array en memoria
       statdisticsInfoArray.push(statdisticsInfo);       

       //Retornar Info
       res.json(statdisticsInfo);
   },

   deleteStadistics: function(req, res) {

        // Extraer ID usuario
        const userId = req.body.playerId;

        let indice = -1;
        indice = statdisticsInfoArray.findIndex(user => user.playerId = userId);
        console.log(indice);
        if (indice >= 0) {
            statdisticsInfoArray.splice(indice,1);
            res.status(200).json("Usuario Eliminado");
        } else {
            res.status(400).json("El usuario no existe");
        }
   },

   getStadistics: function(req, res) {
       res.json(statdisticsInfoArray);
   }
};

module.exports = controllers;