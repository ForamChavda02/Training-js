const express = require("express");
const router = express.Router();

let produts = [
    { id: 1, name: "Air brush flawless filter", price: 3500},
    { id: 2, name: "pillowtalk medium", price: 4000}
];

router.get("/", (req, res) => {
    res.json(produts);
});

router.get("/:id", (req, res) => {
    const product = produts.find(p => p.id === parseInt(req.params.id));
    if(!product) return res.status(404).json({ message: "Product not found"});
    res.json(product);
});

router.post("/", (req, res) => {
    const { name, price } = req.body;
    const newProduct = { id: produts.length + 1, name, price };
    produts.push(newProduct);
    res.status(200).json(newProduct);
});

router.put("/:id", (req, res) => {
    const product = produts.find(p => p.id === parseInt(req.params.id));
    if(!product) return res.status(404).json({ message: "Product not found"});
    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;
    res.json(product);
});

router.delete("/:id", (req, res) => {
    produts = produts.filter(p => p.id !== parseInt(req.params.id));
    res.json({ message: "Product deleted successfully"});
});

module.exports = router;