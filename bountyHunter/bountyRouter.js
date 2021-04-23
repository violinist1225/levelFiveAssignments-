const express = require('express')
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')


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
        "firstName": "Reggie",
        "lastName": "Whitman",
        "living": true,
        "bountyAmount": 3,
        "type": "Jedi",
        "_id": uuidv4()
    }
]


//all methods structure (get, post etc) must go in order because pre-built

bountyRouter.get("/", (req, res) => {
    res.send(bounties)
})

bountyRouter.post("/", (req, res) =>
{
    const newBounty = req.body
    bounties.push(newBounty)
    res.send("Successfully added ${} to the database!!")
})

// bountyRouter.get(":/_id"), (req, res) => {
//     const bounties = req.params._id
//     const foundBounty = bounties.find(bounty())
// }

bountyRouter.delete("/:bountyId", (req, res) =>
{
    // console.log(req)
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty=> {
        if(bounty._id === bountyId){
            return true
        }    
    })
    bounties.splice(bountyIndex, 1)
        res.send(`Successfully DELETED ${bounties[bountyIndex].firstName} from the database!!`)
})


bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const updatedObject = req.body
    const bountyIndex = bounties.findIndex(bounty=> (bounty._id === bountyId))
    const updatedBounty = Object.assign(bounties[bountyIndex], updatedObject)
    console.log(bountyId, updatedObject, bountyIndex, updatedBounty)
    
    res.send(updatedBounty)
})
    
 
   




module.exports = bountyRouter