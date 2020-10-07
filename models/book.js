const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  // Not all books, just the filtered books from scraped Google pages
  // from which seed data was sourced
  authors: [String],

  description: {
    type: String,
    default: ""
  },

  // url string for thumbnail image
  thumbnail: {
    type: String,
    default: ""
  },

  // url for individual book web page - unique index
  href: {
    type: String,
    default: "",
    unique: true
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
