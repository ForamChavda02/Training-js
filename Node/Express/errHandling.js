const express = require("express");
const app = express();
const port = 3000;

app.get("/error", (req, res) => {
    throw new Error("something went wrong");
});

app.use((err, req, res, next) => {
    console.error("Error:", err.message);

    res.status(500).json({
        message: err.message
    });
});

app.listen(port, () => {
    console.log(`app is listening on port: ${port}`);
});