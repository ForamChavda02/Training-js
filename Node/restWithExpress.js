const express = require("express");
const app = express();

let todos = [
    {id: 1, title: "Power of now", complted: false},
    {id: 2, title: "Atomic habits", complted: false}
];

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get("/todos", (req, res) => {
    res.json(todos);
});

app.get("/todos/:id", (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if(!todo) return res.status(404).json({ message: "todo not found"});

    if(req.body.title) todo.title = req.body.title;
    if(req.body.complted !== undefined) todo.complted = req.body.complted;

    res.json(todo);
});

app.post("/todos", (req, res) => {
    if(!req.body.title) {
        return res.status(400).json({ message: "Title is required"});
    }

    const newTodo = {
        id: todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1,
        title: req.body.title,
        complted: req.body.complted || false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.delete("/todos/:id", (req, res) => {
    const index = todos.findIndex(t => t.id === parseInt(req.params.id));
    if(index === -1) {
        return res.status(404).json({ message: "todo not found"});
    }
        const deleteTodo = todos[index];
        todos.splice(index, 1);

        res.json(deleteTodo);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({message: "something went wrong! "});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("on port 3000");
});