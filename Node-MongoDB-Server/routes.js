const express = require("express")
const router = express.Router()
const homeController = require("./controllers/homeController")
const bookController = require("./controllers/bookController")

router.get('/', homeController.getHomePage)
router.get('/home', homeController.getHomePage)
router.get("/books", bookController.addBook)
router.get("/book-list", bookController.getBookList)
router.post('/books',bookController.postBook)
router.get('/book-list/delete/:id', bookController.deleteBook);

module.exports = router