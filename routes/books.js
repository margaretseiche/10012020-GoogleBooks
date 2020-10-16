const router = require("express").Router();
const booksController = require("../controllers/booksController");

// router.get("/books", (req, res) => {

router.route("/")
  .get(booksController.findAll) 
  .post(booksController.create)
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html

//   db.Book.find({
//     title: { $regex: new RegExp(req.query.q, 'i')}
//   })
//     .then(books => res.json(books))
//     .catch(err => res.status(422).end());
// });

router.route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove)

module.exports = router;
