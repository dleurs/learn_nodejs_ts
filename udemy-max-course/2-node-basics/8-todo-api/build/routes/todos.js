"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
let todos = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodo);
    return res.status(201).json({ message: "Added todo", todo: newTodo, todos: todos });
});
router.put('/todo/:todoId', (req, res, next) => {
    const strTodoId = req.params.todoId;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === strTodoId);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        return res.status(200).json({ message: "Todo replaced", todos: todos });
    }
    res.status(404).json({ message: "Could not find todo for this id" });
});
router.delete('/todo/:todoId', (req, res, next) => {
    todos = todos.filter(todoItem => todoItem.id !== req.params.todoId);
    res.status(200).json({ message: "Deleted todo", todos: todos });
});
exports.default = router;
//# sourceMappingURL=todos.js.map