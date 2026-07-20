const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const Users = [
    {id: 1, name: "Jane", job: "Developer"}
];

app.get("/reqres.in", (req, res) => {
    res.json({Users});
});

app.post("/reqres.in", (req, res) => {
    if(!req.body.name && !req.body.job) {
        return res.status(401).json({message: "name and job both are required"});
    }

    const newUser = {
        id: Users.length + 1,
        name: req.body.name,
        job: req.body.job
    };

    Users.push(newUser);
    res.status(201).json({ message: "User added sucessfully"});
});

app.put("/reqres/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = Users.find(u => u.id === id);
    if(!user) {
        return res.status(404).json({message: "Id not found"});
    }

    const updateUser = {
        job: req.body.job
    };
    res.json({updateUser});
});

app.delete("/reqres/:id", (req, res) => {
    const index = Users.findIndex(u => u.id === parseInt(req.params.id));
    Users.splice(index, 1);
});

app.listen(PORT, () => {
    console.log(`app is on ${PORT}`);
});