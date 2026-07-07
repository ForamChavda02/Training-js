const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("login", () => {
    console.log("User loggedIn");
});

emitter.emit("login");

emitter.on("user", (name, age) => {
    console.log(name, age);
});

emitter.emit("user", "Foram", 22);

emitter.on("payment", () => {
    console.log("Update database");
});

emitter.on("payment", () => {
    console.log("send email");
});

emitter.emit("payment");

emitter.once("start", () => {
    console.log("inside Once, runs only once");
});

emitter.emit("start");
emitter.emit("start");