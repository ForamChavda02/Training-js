const express = require("express");
const { WebSocketServer } = require("ws");

const app = express();
const server = app.listen(3000, () => {console.log("Chat server is running on port 3000")})

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
    console.log("new user connected");

    wss.clients.forEach((client) => {
        if (client.readyState === 1) {
            client.send(JSON.stringify ({
                user: parseData.user,
                text: parseData.text,
                timeStamp: new Date()
            }));
        }
    });

    ws.on("close", () => { console.log("user disconnected") });
});