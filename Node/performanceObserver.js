const { performance, PerformanceObserver } = require("perf_hooks");

const obs = new PerformanceObserver((items) => {

    const entries = items.getEntries();
    entries.forEach((entry) => {
        console.log(`Name: ${entry.name}, Types: ${entry.entryType}, Duration: ${entry.duration.toFixed(2)}ms`);
    });
});

obs.observe({ entryTypes: ["measure"] });

performance.mark("task1Start");

setTimeout(() => {
    performance.mark("task1End");
    performance.measure("Task1", "task1Start", "task1End");

    performance.mark("task2Start");
    setTimeout(() => {
        performance.mark("task2End");
        performance.measure("Task2", "task2Start", "task2End");

        performance.clearMarks();
        performance.clearMeasures();
    }, 1000);
}, 1000);