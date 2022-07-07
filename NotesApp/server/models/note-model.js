const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = {
  uid : String,
  title: String,
  content: String
};


// export const Note = mongoose.model("Note",notesSchema); 
module.exports = mongoose.model("Article", articleSchema);