const express = require("express");
const client = require("prom-client");

const register = new client.Registry()

register.setDefaultLabels({
    app: "node-js-monitoring-demo"
});

client.collectDefaultMetrics({ register });

const httpRequestDurationMicroseconds = new client.Histogram({
    name: "http_request_duration_seconds",
    help: "Duration of HTTP request in seconds",
    labelNames: ["method", "route", "code"],
    buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10]
});

const app = express();

app.use((req, res, next) => {
    const end = httpRequestDurationMicroseconds.startTimer();
    res.on("finish", () => {
        end({ method: req.method, route: req.path, code: res.statusCode });
    });
    next();
});

app.get("/metrics", async(req, res) => {
    res.set("Content-Type", register.contentType);
    res.end(await register.metrics());
});

app.get("/", (req, res) => {
    res.send("hello observability");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});