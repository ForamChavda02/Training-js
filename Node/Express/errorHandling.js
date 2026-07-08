const express = require("express");
const app = express();
const port = 3000;

app.get("/error", (req, res) => {
    throw new Error("Something went wrong");
});

app.get("/async-error", (req, res, next) => {
    setTimeout(() => {
        try {
            const result = notDefinedFunction();
            res.send(result);
        }
        catch (error) {
            next(error);
        }
    }, 1000)
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke");
});

app.listen(port, () => {
    console.log(`we are on port ${port}`);
});