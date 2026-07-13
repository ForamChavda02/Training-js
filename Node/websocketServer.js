const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8081 });
console.log("websocket on 8081");

wss.on("connection", (ws) => {
    console.log("New client connected");

    ws.send("Welcome to the websocket server!");

    ws.on("message", (message) => {
        console.log(`Received: ${message}`);

        ws.send(`Server received: ${message}`);
    });

    ws.on("close", () => {
        console.log("client disconnected");
    });
});