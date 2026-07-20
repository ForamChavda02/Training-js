const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const session = require("express-session");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const JWT_SECRET = process.env.JWT_SECRET;

app.use(session ({
    secret: "your-secret-key",
    resave: false,
    saveUnintialized: false,
    cookie: { secure: process.env.NODE_ENV === "production", maxAge : 24 * 60 * 60 * 1000}
}));

const Users = [
    {id: 1, name: "jane", email: "eve.holt@reqres.in", password: "pistol"},
    {id: 2, name: "Tony", email: "eve.holt@reqres.in", password: "cityslicka"},
    {id: 3, name: "Thor", email: "thor@gmail.com", password: "hello"},
    {id: 4, name: "Steve", eamil: "steve@gmail.com", password: "steveRogers"}
];

app.post("/register", (req, res) => {
   const { email, password } = req.body;
   const user = Users.find(u => u.eamil === email && u.password === password);
   if(!user) {
    return res.status(401).json({ message: "Invalid password or email"});
   }

   const payload = {
    id: user.id,
    email: email,
    password: password
   };

   const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h"});

   res.json({ message: "register successfully", token});
});

app.listen(PORT, () => {
    console.log(`app is on port ${PORT}`);
});