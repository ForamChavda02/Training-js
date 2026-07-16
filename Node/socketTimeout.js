const net = require("net");

const server = net.createServer((socket) => {
    console.log("client connected");

    socket.setTimeout(10000);

    socket.on("timeout", () => {
        console.log("Socket timeout");
        socket.write("you have been inactive for too long. Disconnecting...\r\n");
        socket.end();
    });

    socket.on("data", (data) => {
        console.log(`Received: ${data.toString().trim()}`);
        socket.write(`Echo: ${data}`);
    });

    socket.on("end", () => {
        console.log("Client disconneted");
    });
});

server.listen(3000, () => {
    console.log("on port 3000");
});