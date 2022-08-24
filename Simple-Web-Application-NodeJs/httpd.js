const http = require('http')
const fs = require('fs')

const os = require('os')
const { DefaultDeserializer } = require('v8')

global.content = ""


const server = http.createServer(
    (req,res)=>{
        //console.log(req.method+" "+req.url+" "+req.httpVersion)

        res.writeHead(200,{"Content-Type":"text/html"})
        //res.write("<h1>Hello World</h1>")
        
        fs.readFile("Simple-Web-Application-NodeJs/public/index.html","utf-8",(err,data)=>{
            if(err){
                const testFolder = 'Simple-Web-Application-NodeJs/'
                fs.readdirSync(testFolder).forEach(file => {
                content = content+"<br>"+file.toString()
                })
            }
            else content = data.toString()
        })
        res.write(content)

        res.end()
    }
)

module.exports = {server}