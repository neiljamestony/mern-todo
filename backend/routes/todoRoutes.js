const express = require('express')
const router = express.Router()
const { getTodo, setTodo, updateTodo, removeTodo } = require('../controllers/todoController')
//SHORTEN VIEW
// router.route('/').get(getTodo).post(setTodo)
// router.route('/:id').delete(removeTodo).put(updateTodo)

router.get('/', getTodo)
router.post('/', setTodo)
router.put('/:id', updateTodo)
router.delete('/:id', removeTodo)

module.exports = router