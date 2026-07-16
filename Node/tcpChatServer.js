const net = require("net");
const clients = [];

const server = net.createServer((socket) => {
    const clientId = `${socket.remoteAddress}: ${socket.remotePort}`;
    console.log(`Client connected: ${clientId}`);

    socket.setEncoding("utf8");

    clients.push(socket);

    socket.write(`Welcome to the chat server! There are ${clients.length} users online.\r\n`);

    function broadcast(message, sender) {
        clients.forEach(client => {
            if(client !== sender) {
                client.write(message);
            }
        });
    }

    broadcast(`User ${clientId} joined the chat.\r\n`, socket);

    socket.on("data", (data) => {
        console.log(`${clientId}: ${data.trim()}`);

        broadcast(`${clientId}: ${data}`, socket);
    });

    socket.on("end", () => {
        console.log(`Client disconnected: ${clientId}`);

        const index = clients.indexOf(socket);
        if(index !== -1) {
            clients.splice(index, 1);
        }

        broadcast(`User ${clientId} left the chart.\r\n`, null);
    });

    socket.on("error", (err) => {
        console.error(`Socket error from ${clientId}:`, err);
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Chat server running on port ${PORT}`);
});

server.on("error", (err) => {
    console.error(err);
});