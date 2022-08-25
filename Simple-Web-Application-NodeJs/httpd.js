const http = require('http')
const fs = require('fs')

const server = http.createServer(
    (req,res)=>{
        console.log(req.method+" "+req.url+" "+req.httpVersion)

        res.writeHead(200,{"Content-Type":"text/html"})
        res.write("<h1>Hello World</h1>")
        res.end()
        
    }
)

module.exports = {server}