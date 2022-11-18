const squackUserModel = require("../models/SquackUser")
const messegeModel = require("../models/messeges.js")

const getIndexPage = async (req,res)=>{
    let data = []
    let msgs = []

    try{
        data = await messegeModel.find()

        data.forEach((messegeSchema)=>{
            msgs.push({from: messegeSchema.from, msg: messegeSchema.msg})
        })
    }catch(err){
        console.log(err)
    }finally{
        res.render("index",{ msgs: msgs})
    }
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