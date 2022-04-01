var express = require('express');
var router = express.Router();
var ModelRouter = require('../models/modelRouter')

router.get('/modelRouter',function(req,res,next){
    console.log('get request for all models');
    ModelRouter.find({})
    .exec(function(err, modelRouter){
        if(err){
            console.log("Error retrieving models");
        }else {
            res.json(modelRouter);
        }
    })
  });

module.exports = router; 