const { performance } = require("perf_hooks");

const startTime = performance.now();

let sum = 0;
for(let i = 0; i < 10; i++) {
    sum += i;
}

const endTime = performance.now();

console.log(`Operation took ${(endTime - startTime).toFixed(2)} miliseconds`);