const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("greet", () => {
    console.log("learning Event")
});

myEmitter.emit("greet");

let events = require("events");
let eventEmitter = new events.EventEmitter();

let myEventHandler = function() {
    console.log("a scream");
}

eventEmitter.on("scream", myEventHandler);
eventEmitter.emit("scream");