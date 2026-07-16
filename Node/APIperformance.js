const { performance, PerfomanceObserver } = require("perf_hooks");
const express = require("express");
const app = express();
const port = 3000;

const obs = new PerformanceObserver((items) => {
    items.getEntries().forEach((entry) => {
        console.log(`[${new Date().toISOString()}] ${entry.name}: ${entry.duration.toFixed(2)}ms`);
    });
});
obs.observe({ entryTypes: ["measure"]});

app.use((req, res, next) => {
    const start = performance.now();
    const requestId = `${req.method} ${req.url} ${Date.now()}`;

    performance.mark(`${requestId}-start`);

    const originalEnd = res.end;
    res.end = function(...args) {
        performance.mark(`${requestId}-end`);
        performance.measure(
            `Request ${req.method} ${req.url}`,
            `${requestId}-start`,
            `${requestId}-end`
        );
        performance.clearMarks(`${requestId}-start`);
        performance.clearMarks(`${requestId}-end`);

        return originalEnd.apply(this, args);
    };
    next();
});

app.get("/", (req, res) => {
    res.send("Hello we are learning performance");
});

app.get("/fast", (req, res) => {
    res.send("fast respones");
});

app.get("/slow", (req, res) => {
    setTimeout(() => {
        res.send("slow response with setTimeout");
    }, 1000);
});

app.get("/process", (req, res) => {
    const requestId = `process-${Date.now()}`;
    performance.mark(`${requestId}-process-strat`);

    let result = 0;
    for(let i = 0; i < 100000; i++) {
        result += Math.sqrt(i);
    }

    performance.mark(`${requestId}-process-end`);
    performance.measure(
        "CPU Processing",
        `${requestId}-process-strat`,
        `${requestId}-process-end`
    );

    res.send(`Process result: ${result}`);
});

app.listen(port, () => {
    console.log("riunning on port 3000");
});