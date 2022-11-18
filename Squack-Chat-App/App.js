const express = require("express")
const router = require("./routes")

const port = 3000
const app = express()

app.use(router)

app.listen(port,()=>{
    console.log(`Squack is running at http://localhost:${port}`)
})