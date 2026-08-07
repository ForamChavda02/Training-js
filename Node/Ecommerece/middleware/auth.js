const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    console.log(req.headers);
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({ message: "Access denied. No token provided."});
    }

    const token = authHeader.split(" ")[1];
    console.log(token);

    try {
        const decoded = jwt.verify(token, "your_secret_key");
        req.user = decoded;
        console.log(decoded);
        next();
    }
    catch (err) {
        return res.status(401).json({ message: "Invalid token."});
    }
}

module.exports = auth;  