const asyncHandler = require('express-async-handler')
//@desc GET ALL TODOS
//@route /api/todo
//@acess PRIVATE
const getTodo = asyncHandler(async (req, res) => res.status(200).json({ message: 'DISPLAY TODOSS' }))

//@desc ADD TODO
//@route /api/todo
//@acess PRIVATE
const setTodo = asyncHandler(async (req, res) => {
    if(!req.body.todo){
        res.status(400).json({ message: 'Please input value' })
    }
    res.status(200).json({ message: req.body.todo })
})

//@desc UPDATE TODO
//@route /api/todo/:id
//@acess PRIVATE
const updateTodo = asyncHandler(async (req, res) => res.status(200).json({ message: `UPDATE TODOSS ${req.params.id}` }))

//@desc REMOVE TODO
//@route /api/todo/:id
//@acess PRIVATE
const removeTodo = asyncHandler(async (req, res) => res.status(200).json({ message: `REMOVE TODO ${req.params.id}` }))

module.exports = { getTodo, setTodo, updateTodo, removeTodo }