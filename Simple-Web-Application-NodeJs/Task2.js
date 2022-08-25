var http = require('http')
var fs = require('fs')

const server = http.createServer((req, res)=>{
  const path = "./publik" + req.url;

  if(fs.existsSync(path)) {
    const ext = path.substring(path.lastIndexOf('.'));
    const mimes = {
      ".html": "text/html",
      ".css": "text/css",
      ".js": "text/javascript"
    }
    fs.readFile(path,(err, data)=>{
      res.writeHead(200, {'Content-Type': mimes[ext]});
      res.write(data);
      return res.end();
    });
  } else {
    console.log("Requested For: "+req.url)
    console.log("Available Files/Folder:")
    fs.readdirSync("./public").forEach(file => {
      console.log(file);
    })
  }
}).listen(8000)