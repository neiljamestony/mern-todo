const express = require("express");
const router = express.Router();
const {
  getTodo,
  createTodo,
  editTodo,
  isDoneTodo,
  removeTodo,
} = require("../controller/todoController");

router.get("/list/:id", getTodo);
router.post("/create", createTodo);
router.put("/edit/:id", editTodo);
router.delete("/remove/:id", removeTodo);
router.put("/isCompleted/:id", isDoneTodo);

module.exports = router;
