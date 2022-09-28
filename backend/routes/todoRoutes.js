const express = require('express')
const router = express.Router()
const { getTodo, setTodo, updateTodo, removeTodo } = require('../controllers/todoController')
const { protect } = require('../middleware/authMiddleware')
//SHORTEN VIEW
// router.route('/').get(protect, getTodo).post(protect, setTodo)
// router.route('/:id').delete(protect, removeTodo).put(protect, updateTodo)

router.get('/', protect, getTodo)
router.post('/', protect, setTodo)
router.put('/:id', protect, updateTodo)
router.delete('/:id', protect, removeTodo)

module.exports = router