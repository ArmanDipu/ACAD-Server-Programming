const mongoose = require("moongoose")

const bookSchema = mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    author:{
        required:true,
        type:String 
    },
    genre:String
})

module.exports = mongoose.model("bookSchema", bookSchema)