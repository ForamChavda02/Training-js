const pino = require("pino");
const express = require("express");
const pinoHTTP = require("pino-http");
require("dotenv").config();

const logger = pino({
    level: process.env.LOG_LEVEL || "info",
    formatters: {
        level: (label) => ({ level: label.toUpperCase() }),
    },
});

const app = express();
app.use(pinoHTTP ({
    logger,
    customLogLevel: function(res, err) {
        if(res.statusCode >= 400 && res.statusCode < 500) {
            return "warn";
        } else if(res.statusCode >= 500 || err) {
            return "error";
        }
        return "info";
    },
}));

app.get("/", (req, res) => {
    req.log.info("Proceesing request");
    res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
    logger.info("we are on port 3000");
});