const express = require("express")
const router = express.Router()
const homeController = require("./controllers/homeController")
const bookController = require("./controllers/bookController")

router.get('/', homeController.getHomePage)
router.get('/home', homeController.getHomePage)
router.get("/books", bookController.addBook)
router.get("/book-list", bookController.getBookList)
router.post('/books',bookController.postBook)
router.get('/book-list/delete/:id', bookController.deleteBook)
router.get('/book-list/update/:id',bookController.showUpdateBook)
router.post('/books/update/:id',bookController.updateBook)

module.exports = router