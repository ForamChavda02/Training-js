const express = require("express");
const usersRouter = require("./routes/users");
const productsRouter = requier("./routes/product");

const app = express();
const port = 8080;

app.use("/users", usersRouter);
app.use("products", productsRouter);

app.get("/", (req, res) => {
    res.send("home page");
});

app.listen(port, () => {
    console.log(`we are on port ${port}`);
});