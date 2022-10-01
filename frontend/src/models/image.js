const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
/*image:{
    type:String,
    required:true,
},*/
name:{
    type:String,
    required:true,
},
price:{
    type:Number,
    required:true,
},
});
const imagemodel = mongoose.model('product',imageSchema);

module.exports = imagemodel;