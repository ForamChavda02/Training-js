const express = require("express");
const products = require("./data/product");
const app = express();
const PORT = 3000;
const path = require("path");
const auth = require("./middleware/auth");
const logger = require("./middleware/logger");
const cors = require("cors");
const event = require("./events/orderListener");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.static("public"));
app.use(logger);
app.use(cors());
app.use(cookieParser());

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const cartRoutes = require("./routes/cartRoutes");
const chekoutRoutes = require("./routes/checkoutRoutes");

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);
app.use("/cart", cartRoutes);
app.use("/checkout", chekoutRoutes);
app.use("/images", express.static("public/images"));
app.get("/check", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "images", "laptop.jpg"));
});

app.listen(PORT, () => {
    console.log("listening on port 3000");
});