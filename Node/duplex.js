const net = require("net");

const server = net.createServer((socket) => {
    socket.on("data", (data) => {
        console.log("received:", data.toString());
        socket.write(`Echo: ${data}`);
    });

    socket.on("end", () => {
        console.log("Client disconnected");
    });
});

server.listen(8080, () => {
    console.log("Server listening on port 8080")
});