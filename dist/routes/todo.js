"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const todo = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ todo: todo });
});
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toString(),
        text: body.text
    };
    todo.push(newTodo);
    res.status(201).json({ message: 'Added Todo', tod: newTodo, todo: todo });
});
router.delete('/delete/:id', (req, res, next) => {
    const params = req.params;
    const id = params.id;
    if (todo) {
        // todo[id].remove()
        const filter = todo.filter((item) => item.id !== id);
        res.status(200).json({ message: 'Deleted todo', todo: filter });
    }
    else {
        res.status(404).json({ message: 'item not found' });
    }
});
router.put('/edit/:id', (req, res) => {
    const params = req.params;
    const id = params.id;
    const body = req.body;
    const todoIndex = todo.findIndex((index) => index.id = id);
    if (todoIndex >= 0) {
        todo[todoIndex] = { id: todo[todoIndex].id, text: body.text };
        return res.status(200).json({ message: 'Updated todo', todo: todo });
    }
    res.status(404).json({ message: 'item not found' });
});
exports.default = router;
