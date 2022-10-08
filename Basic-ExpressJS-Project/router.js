const express = require("express")
const router = express.Router()
const fs = require("fs")

router.get("/",(req,res)=>{
    res.send("Home Page Here")
})

router.get("/about",(req,res)=>{
    res.send("About Page Here")
})

router.get("/cv",(req,res)=>{
    educations = fs.readFileSync("data/education",{ encoding: "utf-8" })
    educations = JSON.parse(String(educations)) 

    edus = []
    for(let key in educations){
        edus.push(educations[key])
    }

    res.render("cv",{
        name: "Arman Hossain Dipu",
        profession : "Software Engineer",
        address : "Dhaka, Bangladesh",
        email : "armanshuvo2000@gmail.com",
        phone: "01611595616",
        educations:edus
    })
})

module.exports = router