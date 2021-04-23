const express = require('express')
const candyRouter = express.Router()
const {v4: uuidv4} = require('uuid')


const candyItems = [
    {
        name: "m&m",
        type: "chocolate",
        price: 3,
        _id: uuidv4()
    },{
        name: "Tony's chocolate bar",
        type: "chocolate",
        price: 5,
        _id: uuidv4()
    },{
        name: "Toffee",
        type: "non-chocolate",
        price: 20,
        _id: uuidv4()
    },{
        name: "Ritter coconut bar",
        type: "chocolate",
        price: 4,
        _id: uuidv4()
    },{
        name: "Godiva Chocolate",
        type: "chocolate",
        price: 40,
        _id: uuidv4()
    },{
        name: "Gummy yummy bears",
        type: "non-chocolate",
        price: 1,
        _id: uuidv4()
    },{
        name: "peppermint taffy",
        type: "non-chocolate",
        price: 3.50,
        _id: uuidv4()
    }
]

candyRouter.get("/", (req, res) => {
    res.send(candyItems)
})

candyRouter.post("/", (req, res) =>
{
    const newCandy = req.body
    candyItems.push(newCandy)
    res.send("Successfully added ${} to the database!!")
})

candyRouter.get(`/search/type`, (req, res) => {
    const type = req.query.type
    const filteredCandy = candyItems.filter(candy => candy.type === type)
    res.send(filteredCandy)
})

candyRouter.get("/:candyId", (req, res) => {
    const candyId = req.params.candyId
    console.log(candyId)
    console.log(candyId)
    const filteredCandy = candyItems.find(candy => candyId === candy._id)
    res.send(filteredCandy)
        }

   )



module.exports = candyRouter
