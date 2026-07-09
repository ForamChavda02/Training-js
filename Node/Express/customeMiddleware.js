const express = require("express");
const app = express();
const port = 3000;

const users = [
    {id: 1, name: "Tony"},
    {id: 2, name: "Thor"},
    {id: 3, name: "Steve"}
];

function checkAdmin(req, res, next) {
    const role = req.headers.role;

    if(role !== "admin") {
        return res.status(403).json({
            message: "Forbidden only admin can delete"
        });
    }
    next();
}

app.get("/users", (req, res) => {
    res.json(users);
});

app.delete("/users/:id", checkAdmin, (req, res) => {
    const id = Number(req.params.id);

    const index = users.findIndex(user => user.id === id);

    if(index === -1) {
        return res.status(404).json({
            message: "user not found"
        });
    }
    const deletedUser = users.splice(index, 1);

    res.json({
        message:"User deleted successfully",
        deletedUser: deletedUser[0]
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});