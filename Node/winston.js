const { format } = require("node:path");
const winston = require("winston");
const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { service: "user-service"},
    transports: [
        new winston.transports.File({ filename: "error.log", level: "error"}),
        new winston.transports.File({ filename: "combined.log"}),
    ],
});

if(process.env.NODE_ENV !== "production") {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

logger.log("info", "Hello distributed log files!");
logger.info("Hello again distributed logs");
logger.error("something went wrong", { additionalInfo: "error details" });