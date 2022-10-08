const express = require("express")
const router = express.Router()
const fs = require("fs")
const {getCV} = require("./controllers/cvController")

router.get("/",(req,res)=>{
    res.send("Home Page Here")
})

router.get("/about",(req,res)=>{
    res.send("About Page Here")
})

router.get("/cv",getCV)

module.exports = router