const express = require("express");
const products = require("./data/product");
const app = express();
const PORT = 3000;
const path = require("path");
const auth = require("./middleware/auth");

app.use(express.json());
app.use(express.static("public"));

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const cartRoutes = require("./routes/cartRoutes");

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);
app.use("/cart", cartRoutes);
app.get("/check", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "images", "laptop.jpg"));
});

app.listen(PORT, () => {
    console.log("listening on port 3000");
});