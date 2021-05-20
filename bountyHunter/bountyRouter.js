const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('./models/bounty.js')
const {v4: uuidv4} = require('uuid')
const { send } = require('process')
const bounty = require('./models/bounty.js')


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
})
bountyRouter.delete("/:bountyId", (req, res, next) =>
{currentBounty.findOneAndDelete({_id: req.params.bountyId},(err, deletedItem) =>
    {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.firstName} from the database`)
})
})


bountyRouter.put("/:bountyId", (req, res, next) => {
    bounty.findOneAndUpdate({_id: req.params.bountyId},
        req.body, //update this obj with this data
         {new: true}, //sends back updated version 
         (err, updatedItem) =>
    {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(`Successfully updated ${updatedItem.firstName} in the database`)
})

})
    
   




module.exports = bountyRouter