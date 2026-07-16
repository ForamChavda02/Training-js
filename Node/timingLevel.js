const { performance, monitorEventLoopDelay } = require("perf_hooks");

const dateStart = Date.now();
const dateEnd = Date.now();
console.log(`Date.now() difference: ${dateEnd - dateStart}ms`);

const hrStart = process.hrtime();
const hrEnd = process.hrtime(hrStart);
console.log(`process.hrtime() difference: ${hrEnd[0]}s ${hrEnd[1]}ns`);

const perfStart = performance.now();
const prefEnd = performance.now();
console.log(`performance.now() differenec: ${(prefEnd - perfStart).toFixed(6)}ms`);

const histogram = monitorEventLoopDelay({ resolution: 20 });
histogram.enable();

setTimeout(() => {
    histogram.disable();
    console.log("Event loop delay metrics");
    console.log(` Min: ${histogram.min}ns`);
    console.log(` Max: ${histogram.max}ns`);
    console.log(` Mean: ${histogram.mean.toFixed(2)}ns`);
    console.log(` Stddev: ${histogram.stddev.toFixed(2)}ns`);
    console.log(` percentiles: 50=${histogram.percentile(50).toFixed(2)}ns, 99=${histogram.percentile(99).toFixed(2)}ns`);
}, 1000);