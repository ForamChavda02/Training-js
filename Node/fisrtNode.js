setTimeout(() => {
    console.log("Timer");
}, 0);

setImmediate(() => {
    console.log("Immediate");
});

process.nextTick(() => {
    console.log("Next Tick");
});

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");