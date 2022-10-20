const express = require("express")
const router = require("./routes")

const port = 3000
const app = express()
app.use(router)

app.set("view engine", "ejs")
app.set("views",__dirname+"/views")

app.listen(port, ()=>{
    console.log(`App is running at http://localhost:${port}`)
})