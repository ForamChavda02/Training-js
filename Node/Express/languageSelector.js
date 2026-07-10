const express = require("express");
const app = express();
const port = 3000;

function detectLanguage(req, res, next) {
    req.userLang = req.query.lang;
    next();
}

app.use(detectLanguage);

app.get("/greet", detectLanguage, (req, res) => {
    if(req.userLang === "es") {
        return res.send("Hola!");
    }
    if(req.userLang === "fr") {
        return res.send("Bonjour!");
    }
    res.send("Hello!");
});

app.listen(port, () => {
    console.log(`on port: ${port}`);
});