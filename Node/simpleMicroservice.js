const expess = require("express");
const app = expess();

app.use(expess.json());

const Users = [
    { id: 1, name: "John Doe", email: "john@gmail.com"},
    { id: 2, name: "Bob smith", email: "bob@gmail.com"} 
];

app.get("/users", (req, res) => {
    res.json(Users);
});

app.get("/user/:id", (req, res) => {
    const user = Users.find(u => u.id === parseInt(req.params.id));
    if(!user) return res.status(404).json({ message: "user not found" });
    res.json(user);
});

app.post("/users", (req, res) => {
    const newUser = {
        id: Users.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    Users.push(newUser);
    res.status(201).json(newUser);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`User service running on port ${PORT}`);
});