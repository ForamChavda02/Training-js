const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let cart = [
    {
        id: 1,
        itemName: "laptop",
        price: 78000,
        quantity: 1
    },
    {
        id: 2,
        itemName: "mouse",
        price: 2300,
        quantity: 2
    },
    {
        id: 3,
        itemName: "keyboard",
        price: 4500,
        quantity: 1
    }
];

app.get("/", (req, res) => {
    res.send("We are at Shoping Cart");
});

app.get("/cart", (req, res) => {
    res.json(cart);
});

app.get("/cart/total", (req, res) => {
    let total = 0;
    for(let item of cart) {
        total += item.price * item.quantity;
    }
    res.json({
        Total: total
    });
});


app.get("/cart/:id", (req, res) => {
    const id = Number(req.params.id);

    const shoping = cart.find(shoping => shoping.id === id);

    if(!shoping) {
       return res.status(404).json({
            message: "item not found"
        })
    }
    res.json(shoping);
});

app.post("/cart/item", (req, res) => {
    const item = req.body;

    const existingItem = cart.find(c => c.id === item.id);

    if(existingItem) {
        existingItem.quantity ++;
    }
    else {
        item.quantity = 1;
        cart.push(item);
    }
    res.json(cart);
});

app.listen(port, () => {
    console.log(`app is listening on port: ${port}`);
});