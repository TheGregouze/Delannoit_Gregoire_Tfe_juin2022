var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Modelschema = new Schema({
    model : {type:String, require:true},
    price: {type:Number, require:true},
});

module.exports = mongoose.model('ModelSwitch', Modelschema, 'modelSwitch');