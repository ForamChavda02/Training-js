const winston = require("winston");
const { ElasticsearchTransport } = require("winston-elasticsearch");

const esTransportOpts = {
    level: "info",
    clientOpts: {
        node: "http://localhost:3000" 
    },
    indexPrefix: "app-logs"
};

const esTransport = new ElasticsearchTransport(esTransportOpts);

const logger = winston.createLogger({
    transports: [
        esTransport,                     
        new winston.transports.Console() 
    ]
});

esTransport.on('error', (error) => {
    console.error('Error writing logs to Elasticsearch:', error.message);
});

logger.on('error', (error) => {
    console.error('General logger error:', error.message);
});

logger.info("this log will go to Elasticsearch");