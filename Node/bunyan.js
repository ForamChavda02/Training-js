const bunyan = require("bunyan");

const logger = bunyan.createLogger({
    name: "myapp",
    streams: [
        {
            level: "info",
            stream: process.stdout
        },
        {
            level: "error",
            path: "error.log"
        }
    ],
    serializers: bunyan.stdSerializers
});

logger.info("Application strated");
logger.info( { user: "john"}, "User logged in" );
logger.error({ err: new Error("Connection failed")}, "Database connection error");