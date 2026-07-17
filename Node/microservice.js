const express = require("express");
const productRoutes = require("./productRoutes");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log((`${req.method} request to ${req.url}`));
    next();
}); 

app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok", service: "product-catalog", timestamp: new Date()});
});

app.use("/api/products", productRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message || "Internal server error"});
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
});

process.on("SIGTERM", () => {
    console.log("stream receves, shutting down gracefully");
    process.exit(0);
});