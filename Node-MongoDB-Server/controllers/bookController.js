const bookModel = require("../models/book")
const books = require("../models/book")

const getBookList = async (req,res) =>{
    let data= []
    let books = []
    try{
        data = await bookModel.find()
        
        data.forEach((bookSchema)=>{
            books.push({name: bookSchema.name, author: bookSchema.author, genre: bookSchema.genre})
        })
    }catch(err){
        console.log(err)
    }finally{
        console.log(books[0])
        res.render("bookList",{ books: books, txt: "Hello!"})
    }
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