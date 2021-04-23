const express =  require("express")
const app = express()
app.use(express.json())


app.use("/bounties", require("./bountyRouter")) 





app.listen(9000, () => {console.log("Server is working!" )})