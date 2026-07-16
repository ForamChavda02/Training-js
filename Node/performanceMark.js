const { performance } = require("perf_hooks");
performance.mark("startProcess");

let result = 0;
for(let i = 0; i < 100000; i++) {
    result += Math.sqrt(i);
}

performance.mark('endProcess');

console.log(performance.getEntriesByType("mark"));