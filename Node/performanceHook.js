const { performance, PerformanceObserver } = require("perf_hooks");

const obs = new PerformanceObserver((items) => {
    items.getEntries().forEach((entry) => {
        console.log(`${entry.name}: ${entry.duration.toFixed(2)}ms`);
    });
});

obs.observe({ entryTypes: ["measure"]});

performance.mark("start");

const data = [];
for(let i = 0; i < 10; i++) {
    data.push(i * i);
}

performance.mark("end");
performance.measure("Data processing time", "start", "end");

performance.clearMarks();