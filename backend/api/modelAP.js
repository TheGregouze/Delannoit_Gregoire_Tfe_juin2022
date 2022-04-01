var express = require('express');
var router = express.Router();
var ModelAP = require('../models/modelAP')

router.get('/modelAP',function(req,res,next){
    console.log('get request for all models');
    ModelAP.find({})
    .exec(function(err, modelAP){
        if(err){
            console.log("Error retrieving models");
        }else {
            res.json(modelAP);
        }
    })
  });

module.exports = router; 