const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const productRoutes = require("./routes/productRoutes");

app.use("/products", productRoutes);

app.listen(PORT, () => {
    console.log("listening on port 3000");
});