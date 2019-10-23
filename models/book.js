// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const loginSchema = new Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   password: { type: String, required: true }
// });

// const Book = mongoose.model("Book", loginSchema);

// module.exports = Book;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: String,
  img: { data: Buffer, contentType: String },
  link: { type: String}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;