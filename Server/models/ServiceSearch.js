const mongoose = require("mongoose");
const {Schema} = mongoose

const SearchSchema = new mongoose.Schema({
  service: {
    type: String,
   
  },
  pincord: {
    type: Number,
    required: true
  }
  
});
const Search =mongoose.model('Search', SearchSchema);

module.exports = Search;
