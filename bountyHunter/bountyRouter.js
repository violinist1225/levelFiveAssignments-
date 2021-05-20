const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('./models/bounty.js')
const {v4: uuidv4} = require('uuid')
const { send } = require('process')


const bounties = [
    {firstName: "Zoid",
    lastName: "Mars",
    living : true,
    bountyAmount: 3,
    type:"Sith",
    _id : uuidv4()},

    {firstName: "Regina",
    lastName : "Whitman",
    living :true,
    bountyAmount :3,
    type : "Jedi",
    _id: uuidv4()},

    {
        firstName: "Reggie",
        lastName: "Whitman",
        living: false,
        bountyAmount: 3,
        type: "Jedi",
        _id: uuidv4()
    }
]


//all methods structure (get, post etc) must go in order because pre-built
//server PROCESSES CRUD methods, whereas frontend/client gives requests.

// bountyRouter.get("/", (req, res) => {
//     res.send(bounties)
// })

bountyRouter.get("/", (req, res, next) => {
    bounties.find((err, bounty) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

bountyRouter.post("/", (req, res, next) =>
{
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) =>
    {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedBounty)


    })
    // req.body._id = uuidv4()
    // const newBounty = req.body
    // bounties.push(newBounty)
    // res.send(newBounty)
})


bountyRouter.delete("/:bountyId", (req, res) =>
{  // console.log(req)
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty=> {
        if(bounty._id === bountyId){
            return true
        }    
    })
    bounties.splice(bountyIndex, 1)
        res.send(`Successfully DELETED a person from the database!!`)
})


bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const updatedObject = req.body
    console.log(updatedObject)
    const bountyIndex = bounties.findIndex(bounty=> (bounty._id === bountyId))
    const updatedBounty = Object.assign(bounties[bountyIndex], updatedObject)
    res.send(updatedBounty)
})
    
 
   




module.exports = bountyRouter