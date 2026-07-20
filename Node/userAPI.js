const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const jwtKey = process.env.JWT_SECRET;

app.use(bodyParser.json());

const Users = [
    {id: 1, name: "John", job: "Developer"},
    {id: 2, name: "Jane", job: "Devops engineer"},
    {id: 3, name: "Tony", job: "AI developer"}
];

app.get("/users", (req, res) => {
    res.json({Users});
});

app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = Users.find(u => u.id === id);
    if(!user) {
        return res.status(404).json({ message: "User not found"});
    }
    res.json({user});
});

app.post("/users", (req, res) => {
    if(!req.body.name && !req.body.job) {
        return res.status(401).json({ message: "name and body are required"});
    }
    const newUser = {
        id: Users.length + 1,
        name: req.body.name,
        job: req.body.job
    };

    Users.push(newUser);
    res.json({message: "new user added"});
});

app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = Users.find(u => u.id === id);
    if(!user) {
        return res.status(404).json("User not found");
    }

    const updateUser = {
        name: req.body.name,
        job: req.body.job
    };
    res.json(updateUser);
});

app.delete("/users/:id", (req, res) => {
    const index = Users.findIndex(f => f.id === parseInt(req.params.id));
    if(index === -1) {
        return res.status(404).json({message: "user does not exist"});
    }
    Users.splice(index, 1);
    res.json({ message: "User deleted successfully"});
});

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
});