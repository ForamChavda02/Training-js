const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const users = [
    {id: 1, name: "Tony"},
    {id: 2, name: "Thor"}
];

//logger middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use((req, res, next) => {
    const token = req.header.authorization;

    if(token !== "Bearer secret123") {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }
    next();
});

app.get("/users", (req, res) => {
    res.json(users);
});

app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);

    const user = users.find(user => user.id === id);

    if(!user) {
       return res.status(404).json({
            message: "user not found!"
        });
    }
    res.json(user);
});

app.post("/users", (req, res) => {
    const { name } = req.body;

    if(!name) {
        return res.status(404).json({
            message: "Name required"
        });
    }
    users.push({
        id: users.length + 1,
        name
    });
    res.status(201).json({
        message: "user added"
    });
});

app.listen(3000);