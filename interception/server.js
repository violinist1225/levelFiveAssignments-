const express = require('express')
const app = express()

app.use("/colors", require("./routes/middleWare")) 

app.use("/colors", (req, res, next) => {
    res.send(req.soothingColor)
    
})
//req is the same value as in middleWare file



app.listen(9000, () => {console.log("Server is working!" )})