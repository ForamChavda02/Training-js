const http = require("http");
const server = http.createServer();
const { server } = require("socket.io");
const io = new Server(server);
const port = 3000;

io.on ("connection", (socket) => {
    console.log("a user connected");

    socket.on("chat message", (msg) => {
        console.log("message:", + msg);
        io.emit("chat message", msg);
    });

    socket.on ('disconnect', () => {
        console.log("user disconnected");
    });
});

server.listen(port, () => {
    console.log(`socket.io listeing on port http://localhost:${port}`);
});