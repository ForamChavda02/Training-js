const express = require("express");
const app = express();
const port = 3000;

function checkCoupon(req, res, next) {
    req.hasDiscount = req.query.code === "SAVE20";
    next();
}

app.get("/checkout", checkCoupon, (req, res) => {
    if(req.hasDiscount) {
        return res.send("Sucsess! You get 20% Off");
    }

    res.send("Total price: $100 (No discount applied)");
});

app.listen(port, () => {
    console.log(`on port: ${port}`);
});