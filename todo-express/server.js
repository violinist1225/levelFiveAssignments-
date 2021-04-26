const express = require('express')
const app = express()

app.use("/todo", require("./routes/todoRouter")) 





app.listen(9000, () => {console.log("Server is working!" )})