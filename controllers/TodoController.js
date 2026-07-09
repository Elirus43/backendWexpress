const todoService = require('../services/TodoService');
const appError = require("../util/AppErr");
async function getAllTodo(req,res)
{
    console.log('GET /todos ');
    let todos = await todoService.getAllTodo();
    res.json({
        message: "Todo list retrieved successfully",
        data: todos,
    });
}
async function getTodoById(req, res)
{
    let id = req.params.id;
    let todo = await todoService.getTodoById(id);
    if(todo)
    {
        res.json({
            message: "Todo retrieved successfully",
            data: todo,
        });
    } else {
        throw new appError.NotFoundError("Todo Not Found");
        }
    }
async function updateTodoById(req, res)
{
    let id = req.params.id;
    let todo = req.body;

    console.log("--- DEBUG START ---");
    console.log("Headers:", req.headers['content-type']); // application/json ပြရပါမယ်
    console.log("Body:", req.body); // ပို့လိုက်တဲ့ data ပြရပါမယ်
    console.log("--- DEBUG END ---");

    let updatedTodo = await todoService.updateTodoById(id, todo);
    if(updatedTodo)
    {
        res.json({
            message: "Todo updated successfully",
            data: updatedTodo,
        });
    } else {
        res.status(404).json({
            message: "Todo Not Found",
        });
    }
}
async function saveTodo(req, res)
{
    console.log('POST /todos', req.body);
    let todo = req.body;
    let savedTodo = await todoService.savedTodo(req.body);
    res.status(201).json({
        message: "Todo saved successfully",
        data: savedTodo,
    });
}
async function deleteTodoById(req, res)
{
    let id = req.params.id;
    let todo = await todoService.deleteTodoById(id);
    if(todo)
    {
        res.json({
            message:"Todo deleted successfully",
            data:todo,
        })
    } else {
        res.status(404).json({
            message:"Todo Not Found",
        })
    }
}

module.exports = {
    getAllTodo,
    getTodoById,
    updateTodoById,
    saveTodo,
    deleteTodoById,
};