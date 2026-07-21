const express = require("express");
const app = express();

const auth = (req, res, next) => {
    const token = req.headers.authorization;

    if(!token) {
        return res.status(401).json({
            message: "unauthorized"
        });
    }
    next();
};

module.exports = auth;