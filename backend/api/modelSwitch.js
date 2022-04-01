var express = require('express');
var router = express.Router();
var ModelSwitch = require('../models/modelSwitch')

router.get('/modelSwitch',function(req,res,next){
    console.log('get request for all models');
    ModelSwitch.find({})
    .exec(function(err, modelSwitch){
        if(err){
            console.log("Error retrieving models");
        }else {
            res.json(modelSwitch);
        }
    })
  });

module.exports = router; 