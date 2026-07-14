const express = require("express");
const pino = require("pino");
const pinoHttp = require("pino-http");

const app = express();
const logger = pino();
const httpLogger = pinoHttp({ logger });

app.use(httpLogger);

app.get("/", (req, res) => {
    req.log.info("User accessed homepage");
    res.send("Hello World!");
});

app.get("/error", (req, res) => {
    req.log.error("Something went wrong");
    res.status(500).send("Error!");
});

app.listen(8080, () => {
    logger.info("Server started on port 8080");
});