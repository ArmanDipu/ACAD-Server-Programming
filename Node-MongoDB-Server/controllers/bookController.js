const getBookList = (req,res) =>{
    res.render("bookList")
}

const addBook = (req, res) =>{
    res.render("addBooks")
}

module.exports= {getBookList, addBook}