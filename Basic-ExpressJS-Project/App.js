// const http = require("http")
const express = require("express")
const app = express()

const hostname = "127.0.0.1"
const port = 3000

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-type": "text/plain"})
//     res.end("Intitial Server")
// })
app.get("/",(req,res)=>{
    res.send("Initial Express Server")
})

// server.listen(port,hostname,()=>{
//     console.log(`Server running at http://${hostname}:${port}/`)
// })
app.listen(port,()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})