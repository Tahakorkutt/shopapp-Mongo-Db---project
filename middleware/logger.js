const { transports, createLogger, format } = require("winston");
const { combine, timestamp, prettyPrint } = format;

require("winston-mongodb");

const username = "taha35";
const password = "taha1234";
const database = "shopdb";

const logger = createLogger({
    level: 'debug',
    format: combine(
        timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
        prettyPrint()
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename: "logs.log", level: "error"}),
        new transports.MongoDB({
            level: 'error',
            db: `mongodb+srv://${username}:${password}@cluster0.5xr9hyn.mongodb.net/${database}?retryWrites=true&w=majority`,
            options: {
                useUnifiedTopology: true
            },
            collection: "server_logs"
        })
    ]
});

module.exports = logger;