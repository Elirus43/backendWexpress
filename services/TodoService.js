const Todo = require("../models/Todo");
const mongoose = require("mongoose");
async function getAllTodo()
{
    let todos = await Todo.find();
    return todos;
}
async function getTodoById(id)
{
    let todo = await Todo.findById(id);
    return todo;
}
async function updateTodoById(id, todo)
{
    const _id = new mongoose.Types.ObjectId(id);
    let updatedTodo = await Todo.findByIdAndUpdate({
        _id
    }, todo, {
        runValidators: true,
        returnDocument: 'after'
    });
    return updatedTodo;
}
async function savedTodo(todo)
{
    let newTodo = new Todo(todo);
    let savedTodo = await newTodo.save();
    return savedTodo;
}
async function deleteTodoById(id)
{
    const _id = new mongoose.Types.ObjectId(id);
    let todo = await Todo.findOneAndDelete({
        _id
    });
    return todo;
}
module.exports = {
    getAllTodo,
    getTodoById,
    updateTodoById,
    savedTodo,
    deleteTodoById,
}