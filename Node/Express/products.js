const express = require("express");
const app = express();
const port = 3000;

const products = [
    {id: 1, name: "laptop", category: "Electronics"},
    {id: 2, name: "phone", category: "Electronics"},
    {id: 3, name: "shirt", category: "clothes"},
    {id: 4, name: "Jeans", category: "Clothes" },
    { id: 5, name: "Headphones", category: "Electronics" }
];

app.get("/products", (req, res) => {
    const { category } = req.query;

    if(category) {
        const filteredProduct = products.filter(
            product => product.category.toLowerCase() === category.toLocaleLowerCase()
        );
        return res.json(filteredProduct);
    }
    res.json(products);
});

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});