const express =  require("express")
const app = express()
app.use(express.json())


app.use("/candies", require("./routes/candyRouter")) 





app.listen(8000, () => {console.log("Server is working!" )})