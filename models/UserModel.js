const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Just boilerplate...Must be changed
const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    synopsis: String,
    date: { type: Date, default: Date.now }
  });
  
  const Book = mongoose.model("Book", bookSchema);
  
  module.exports = Book;