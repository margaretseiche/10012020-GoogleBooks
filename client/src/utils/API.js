import axios from "axios";

export default {

  // Google API
  searchTerms: function(query) {
    console.log("https://www.googleapis.com/books/v1/volumes?q=" + query);
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" + query
    );
  },
  
  // The getBooks method retrieves books from the server
  getBooks: function() {
    return axios.get("/api/books");
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};