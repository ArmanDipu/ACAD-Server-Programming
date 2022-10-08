const express = require("express")
const router = require("./router")
const app = express()

const hostname = "127.0.0.1"
const port = 3000

app.use(express.static("./public"))
app.use(router)

app.listen(port,()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})