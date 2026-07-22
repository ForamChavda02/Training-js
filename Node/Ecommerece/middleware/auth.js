const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.header("Authorization");

    if(!token) {
        return res.json({ message: "Access denied" });
    }

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), "my_secret_key");
        req.user = decoded;
        next();
    }
    catch(error) {
        res.status(401).json({ message: error.message });
    }
}
