const asyncHandler = require("express-async-handler");
const Todo = require("../model/Todo");

//@desc GET ALL USER TODO
//@route /api/todo/list
const getTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const todos = await Todo.find({ user: id });
  res.status(200).json(todos);
});

//@desc INSERT TODO
//@route /api/todo/create

const createTodo = asyncHandler(async (req, res) => {
  const { todo, uid, isCompleted } = req.body;

  if (!todo) res.status(401).json({ msg: "This field is required!" });

  const todoData = await Todo.create({
    title: todo,
    user: uid,
    isCompleted: isCompleted,
  });
  return res.status(201).json({
    msg: "Todo added successfully!",
    data: todoData,
    isSuccess: false,
  });
});

const editTodo = asyncHandler(async (req, res) => {
  const todos = await Todo.findById(req.params.id);
  if (!todos) res.status(401).json({ msg: "Todo Not found!" });

  await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  const updatedData = await Todo.find();

  res.status(201).json(updatedData);
});

const removeTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) res.status(401).json({ msg: "Todo not found" });
  await todo.remove();
  res.status(201).json({ msg: "success" });
});

const isDoneTodo = asyncHandler(async (req, res) => {
  const todos = await Todo.findById(req.params.id);
  if (!todos) res.status(401).json({ msg: "Todo Not found!" });

  await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  const updatedData = await Todo.find();

  res.status(201).json(updatedData);
});

module.exports = { getTodo, createTodo, editTodo, isDoneTodo, removeTodo };
