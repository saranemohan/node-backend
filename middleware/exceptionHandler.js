import logger from "../utils/logger.js";

const exceptionHandler = () => {
    process.on('uncaughtException', (err) => {
        logger.error({
            message: 'Uncaught Exception',
            error: err.message,
            stack: err.stack,
        });
        process.exit(1); // Or recover carefully
    });

    process.on('unhandledRejection', (reason) => {
        logger.error({
            message: 'Unhandled Rejection',
            reason,
        });
        process.exit(1); // Or attempt graceful shutdown
    });

    process.on('SIGINT', () => {
        logger.info('SIGINT received. Shutting down gracefully.');
        process.exit(0);
    });

    process.on('SIGTERM', () => {
        logger.info('SIGTERM received. Shutting down gracefully.');
        process.exit(0);
    });
};


export { exceptionHandler }