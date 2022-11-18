const squackUserModel = require("../models/SquackUser")
const messegeModel = require("../models/messeges.js")

const getIndexPage = (req,res)=>{
    res.render("index")
}

const postMessege = (req,res) =>{
    const data = new messegeModel({
        from: req.body.from,
        to: req.body.to,
        msg: req.body.msg
    })
    data.save().then(()=>{
        console.log(data)
    }).catch((err)=>console.log(err)).finally(()=>{
        res.redirect("/")
    })
}

module.exports = {getIndexPage, postMessege}