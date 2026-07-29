const express = require("express");
const http = require("http");
// const products = require("./data/product");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new Server (server);
const PORT = 3000;
const path = require("path");
const auth = require("./middleware/auth");
const logger = require("./middleware/logger");
const cors = require("cors");
const event = require("./events/orderListener");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");

io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("message", (msg) => {
        console.log(msg);
        io.emit("message", msg);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

server.listen(PORT, () => {
    console.log(`Serevr is listening on ${PORT}`);
});

const limiter = rateLimit ({
    windowMs: 60 * 1000,
    max: 100,
    message: "To many requests, try again later."
});

app.use(helmet());
app.use(limiter);
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

// app.listen(PORT, () => {
//     console.log("listening on port 3000");
// });