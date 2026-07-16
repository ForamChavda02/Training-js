const net = require("net");

const server = net.createServer((socket) => {
    console.log("Client connected");

    socket.setEncoding("utf8");

    socket.on("data", (data) => {
        console.log(`Received from client: ${data}`);

        socket.write(`Echo: ${data}`);
    });

    socket.on("end", () => {
        console.log("client diconnected");
    });

    socket.on("error", (err) => {
        console.error("socket error:", err);
    });

    socket.write("welcome to the TCP server!\r\n");
});

server.listen(3000, () => {
    console.log("TCP Serevr running on port 3000");
});