const mongoose = require("mongoose");
const {Schema} = mongoose

const ProviderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
   
  },
  email: {
    type: String,
    required: true,

  },
  mobile: {
    type: String,
    required: true
  },
  gender:{
    type : String,
    required: true
  },
  service:{
    type : String,
    required:true
  },
  your_time:{
    type : String,
    required:true
  },
  state:{
    type :String,
    require:true
 },
 city:{
    type :String,
    require:true
  },
  pincode:{
    type :String,
    require:true,
  },
  address:{
    type:String,
    required:true
  }
  
});
const Provider = mongoose.model('provider', ProviderSchema);

module.exports = Provider;

