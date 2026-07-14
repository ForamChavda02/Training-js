const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();

app.use(express.json());

const userValidationRules = [
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 8}),
    body("age").isInt({ min: 18}).toInt(),
    body("name").trim().escape().notEmpty()
];

app.post("/register", userValidationRules, (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, age, name } = req.body;

    res.status(201).json({ message: "User registered successfully" });
});