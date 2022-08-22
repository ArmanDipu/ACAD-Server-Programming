var http = require('http')

var server = http.createServer(
    (request,response)=>{
        console.log(request.method+" "+request.url+" "+request.httpVersion)
        response.end()
    }
)

server.listen(8000)