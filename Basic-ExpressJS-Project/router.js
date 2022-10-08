const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("Home Page Here")
})

router.get("/about",(req,res)=>{
    res.send("About Page Here")
})

module.exports = router