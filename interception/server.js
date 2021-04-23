const express = require('express')
const app = express()

app.use("/colors", require("./routes/colorRouter")) 





app.listen(9000, () => {console.log("Server is working!" )})