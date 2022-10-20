const express = require("express")

const port = 3000
const app = express()

app.get('/', (req, res) => {
    res.send('Test Server')
  })

app.listen(port, ()=>{
    console.log(`App is running at http://localhost:${port}`)
})