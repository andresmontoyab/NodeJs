'use strict';

var controllers = {
    userInfo: function(req, res) {
       console.log(req.body);
       var userInfo = {
           playerId: "Let's Play",
           level: "1",
           equipment: ":(",
       }
       res.json(userInfo);
   },
};

module.exports = controllers;