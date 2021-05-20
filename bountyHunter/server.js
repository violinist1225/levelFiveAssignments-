const express =  require("express")
const app = express()
const mongoose = require("mongoose")
app.use(express.json())

const morgan = require('morgan')

app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/bountiesdb',

{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, 
() => console.log("Connected to the DB")

)


app.use("/bounties", require("./bountyRouter")) 
//require requires file; /bounties is not a function. 
//if no /bounties, then in postman put localhost: 9000





app.listen(9000, () => {console.log("Server is working!" )})
//any request that comes from this file, will listen to 9000. This is reason why could use "/" instead of "/bounties"

//Order must be express called first, etc. App.listen last 