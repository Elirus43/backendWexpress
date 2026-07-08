let express = require('express');
let router = express.Router();
let Todo = require('../controllers/TodoController');

// Route creation
router.get('/', Todo.getAllTodo);
router.get('/:id', Todo.getTodoById);
router.post('/', Todo.saveTodo);
router.put('/:id', Todo.updateTodoById);
router.delete('/:id', Todo.deleteTodoById)

module.exports = router;