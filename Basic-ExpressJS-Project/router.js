const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("Home Page Here")
})

router.get("/about",(req,res)=>{
    res.send("About Page Here")
})

router.get("/cv",(req,res)=>{
    res.render("cv",{
        name: "Arman Hossain Dipu",
        profession : "Software Engineer",
        address : "Dhaka, Bangladesh",
        email : "armanshuvo2000@gmail.com",
        phone: "01611595616"
    })
})

module.exports = router