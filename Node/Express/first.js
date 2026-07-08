const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req,res) => {
    res.send("Hello from express folder");
});
 
app.listen(port, () => {
    console.log(`express is listinig on port ${port}`);
});