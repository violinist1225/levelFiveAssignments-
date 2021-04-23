const express = require('express')
const colorRouter  = express.Router()


// const color = {
//     name: "blue",
//     type: "calming",
//     favorite: false,
// }

colorRouter.use("/",(req, res, next) => {
    console.log("Middleware is working")
    next()
    
})

colorRouter.use("/",(req, res, next) => {
    req.body = {
        name: "blue",
        type: "calming",
        favorite: false,
    }  
});

colorRouter.get("/", req, res, next) => {
   console.log("Get Request received")
    res.send(req.body)
}


module.exports= colorRouter