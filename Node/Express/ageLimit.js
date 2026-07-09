const express = require("express");
const app = express();
const port = 3000;

app.get("/profile", (req, res) => {
    console.log(req.query);
    const age  = Number(req.query.age);
    console.log(age);

    if(age >= 18) {
        return res.send("welcome to your profile");
    }
    res.send("access denied");
});

app.listen(port, () => {
    console.log(`app is running on port: ${port}`);
});