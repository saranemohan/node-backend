import winston from "winston";

const { combine, colorize, timestamp, printf, errors } = winston.format;

const consoleTransport = new winston.transports.Console({
    format: combine(
        colorize(),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        errors({stack:true}),
        printf(({timestamp, level, message, stack})=>{
            return `[${timestamp}] ${level}: ${stack || message}`;
        })
    )
});

export { consoleTransport }