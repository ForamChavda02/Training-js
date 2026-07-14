const express = require("express");
const { webSocketServer, WebSocketServer } = require("ws");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "websocket.html"));
});

const server = app.listen(3000, () => {
    console.log("websocket on server 3000");
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
    console.log("New native websocket client connected");

ws.on("message", (rawData) => {
    const message = rawData.toString();
    console.log(`received ${message}`);
    wss.clients.forEach((client) => {
        if(client.readyState === ws.OPEN) {
            client.send(message);
        }
    });
});

ws.on("close", () => {
    console.log("Client Disconnected");
});
});