const net = require("net");

const client = net.createConnection({ port: 8080 }, () => {
    console.log("connected");
    client.write("Hello from client!");
});

client.setEncoding("utf8");

client.on("data", (data) => {
    console.log(`Received from server: ${data}`);

    client.write("More data from client");
});

client.on("end", () => {
    console.log("Disconnected from server");
});

client.on("error", (err) => {
    console.error("Connection error:", err);
});