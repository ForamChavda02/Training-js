const websocket = require("ws");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ws = new websocket('ws://localhost:8080');

ws.on("open", () => {
    console.log("Connected to the websocket server");
    promptForMessage();
});

ws.on("message", (message) => {
    console.log(`Server: ${message}`);
});

ws.on("close", () => {
    console.log("Disconnected from server");
    process.exit(0);
});

function promptForMessage() {
    rl.question("Enter a message", (message) => {
        if(message.toLowerCase() === "exit") {
            ws.close();
            rl.close();
            return;
        }
        ws.send(message);
        promptForMessage();
    });
}