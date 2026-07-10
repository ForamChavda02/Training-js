const express = require("express");
const app = express();
const port = 3000;

function checkTheme(req, res, next) {
    req.isDarkMode = req.query.mode === "dark";
    next();
}

app.use(checkTheme);

app.get("/interface", checkTheme, (req, res) => {
    if(req.isDarkMode) {
        return res.send("Rendering Dark Mode interface");
    }
    res.send("rendering light mode interface");
});

app.listen(port, () => {
    console.log(`on port ${3000}`);
});