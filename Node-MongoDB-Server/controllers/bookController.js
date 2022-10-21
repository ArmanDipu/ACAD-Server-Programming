const bookModel = require("../models/book")

const getBookList = (req,res) =>{
    res.render("bookList")
}

const addBook = (req, res) =>{
    res.render("addBooks")
}

const postBook = (req, res) =>{
    const data = new bookModel({
        name: req.body.name,
        author: req.body.author,
        genre: req.body.genre
    })
    data.save().then(()=>{
        console.log("Book Added!")
    }).catch((error)=>{console.log(error)}).finally(()=>{
        res.redirect("/book-list")
    })
    
}

module.exports= {getBookList, addBook, postBook}