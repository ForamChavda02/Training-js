const { monitorEventLoopDelay } = require("perf_hooks");

const histogram = monitorEventLoopDelay({ resolution: 10 });

histogram.enable();

const operations = [];

for(let i = 0; i < 10; i++) {
    operations.push(new Promise((resolve) => {
        setTimeout(() => {
            let sum = 0;
            for(let j = 0; j < 1000000; j++) {
                sum += j;
            }
            resolve(sum);
        }, 1000);
    }));
}

Promise.all(operations).then(() => {
    histogram.disable();

    console.log("Event loop Delay Statistics:");
    console.log(` Min: ${histogram.min}ns`);
    console.log(` MAx: ${histogram.max}ns`);
    console.log(` Mean: ${histogram.mean.toFixed(2)}ns`);
    console.log(` Stddev: ${histogram.stddev.toFixed(2)}ns`);

    console.log("\nPercentiles:");
    [1, 10, 50, 90, 99, 99.9].forEach((p) => {
        console.log(` p${p}: ${histogram.percentile(p).toFixed(2)}ns`)
    });
});