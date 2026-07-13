const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("Chat message", (msg) => {
        console.log("message received", msg);
        io.emit("Chat message", msg);
    });

    socket.on("discoonect", () => {
        console.log("A user disconnected");
    });
});

const port = process.env.port || 3000;
server.listen(port, () => {
    console.log(`on port ${port}`);
});