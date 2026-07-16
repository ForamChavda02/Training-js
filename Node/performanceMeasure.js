const { performance } = require("perf_hooks");

performance.mark("start");

let result = 0;
for(let i = 0; i < 100000; i++) {
    result += Math.sqrt(i);
}

performance.mark("end");

performance.measure("processTime", "start", "end");

const measure = performance.getEntriesByName("processTime")[0];
console.log(`Process took ${measure.duration.toFixed(2)} milliseconds`);

performance.clearMarks();
performance.clearMeasures();