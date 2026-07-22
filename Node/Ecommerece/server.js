const express = require("express");
const products = require("./data/product");
const app = express();
const PORT = 3000;
const auth = require("./middleware/auth")

app.use(express.json());

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);

app.listen(PORT, () => {
    console.log("listening on port 3000");
});