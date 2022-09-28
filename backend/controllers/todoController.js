const asyncHandler = require('express-async-handler')
const TodoModel = require('../models/todoModel')
const UserModel = require('../models/userModel')

//@desc GET ALL TODOS
//@route /api/todo
//@acess PRIVATE
const getTodo = asyncHandler(async (req, res) => {
    const todos = await TodoModel.find({ user: req.user.id })
    res.status(200).json(todos)
})

//@desc ADD TODO
//@route /api/todo
//@acess PRIVATE
const setTodo = asyncHandler(async (req, res) => {
    const { todo } = req.body
    if(!todo){
        res.status(400).json({ message: 'Please input value' })
    }
    const insertedTodo = await TodoModel.create({ todo: todo, user: req.user.id })

    res.status(200).json(insertedTodo)
})

//@desc UPDATE TODO
//@route /api/todo/:id
//@acess PRIVATE
const updateTodo = asyncHandler(async (req, res) => {
    const todos = await TodoModel.findById(req.params.id)
    if(!todos){
        res.status(400)
        throw new Error('Todo not found')
    }
    // check user
    const user = await UserModel.findById(req.user.id)

    // check if user data matches on current user
    if(todos.user.toString() !== user.id) res.status(401).json({ message: 'User not Authorized' })

    const updatedTodo = await TodoModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(updatedTodo)
})

//@desc REMOVE TODO
//@route /api/todo/:id
//@acess PRIVATE
const removeTodo = asyncHandler(async (req, res) => {
    const todos = await TodoModel.findById(req.params.id)

    if(!todos){
        res.send(400).json({ message: 'Todo not found'})
    }

    // check user
    const user = await UserModel.findById(req.user.id)

    // check if user data matches on current user
    if(todos.user.toString() !== user.id) res.status(401).json({ message: 'User not Authorized' })

    await todos.remove()
    res.status(200).json({ id: req.params.id })
})

module.exports = { getTodo, setTodo, updateTodo, removeTodo }