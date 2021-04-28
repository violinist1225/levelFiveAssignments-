const express = require('express')
const todoRouter = express.Router()
const {v4: uuidv4} = require('uuid')



const todos = [{
    name: "Violin Practice",
    description: "practice song for 3 hours",
    imageUrl: "http://www.yamaha.com/en/musical_instrument_guide/common/images/violin/play_main.jpg",
    completed: false,
    _id: uuidv4()
} ,

{
name: "Study Javascript ",
description: "Four hours of coding",
imageUrl: "https://blog.4tests.com/wp-content/uploads/2016/09/Screen-Shot-2016-09-21-at-8.27.57-PM.png",
completed: false,
_id: uuidv4()
}

,

{
    name: "Cook dinner",
    description: "Salmon with vegetables",
    imageUrl: "https://www.wellplated.com/wp-content/uploads/2018/06/Baked-Salmon-in-Foil-at-400.jpg",
    completed: false,
    _id: uuidv4()
    
    }

]



todoRouter.get("/", (req, res) => {
    res.send(todos)
})

todoRouter.post("/:todoId", (req, res) =>
{
    const newTodo = req.body
    console.log(req.body)
    todos.push(newTodo)
    res.send(`Successfully added to the database!!`)
    console.log(todos)
})


todoRouter.delete("/:todoId", (req, res) =>
{
    // console.log(req)
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo=> {
        if(todo._id === todoId){
            return true
        }    
    })
    todos.splice(todoIndex, 1)
        res.send(`Successfully DELETED ${todos[todoIndex].name} from the database!!`)
})


todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const updatedTodo = req
    console.log(req)
    const todoIndex = todos.findIndex(todo=> (todo._id === todoId))
    const updatedTodos = Object.assign(todos[todoIndex], updatedTodo)
    console.log(todoId, todoIndex, updatedTodo)
    
    res.send(updatedTodos)
})
    
 
   




module.exports = todoRouter