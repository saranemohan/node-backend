import winston from "winston";
import { consoleTransport } from "../config/logger.config.js";

const { errors } = winston.format;

const logger = winston.createLogger({
    level:'info',
    format: errors({stack:true}),
    transports: [
        consoleTransport
    ]
});

export default logger;