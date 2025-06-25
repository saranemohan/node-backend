import express from 'express';
import startServer from './config/app.config.js';
import connectDB from './config/db.config.js';
import logAllRequests from './middleware/request-logger.js';
import router from './router/auth.route.js';
import logger from './utils/logger.js';
import corsConfig from './config/cors.config.js';


// Define Express App
const app = express();
await connectDB();

/**
 * All Middlewares defined below
 */
app.use(express.json());

app.use(corsConfig);

logAllRequests(app);

/**
 * All Routes define below
 */

app.use('/api', router);

// Health check & root endpoint
app.get('/', (req, res) => { res.send("Backend API Service is Running") });
app.get('/health', (req, res) => { res.status(200).json({ success: true }) });

// Response for undefined routes and internal server error
app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Resource Not Found' });
});

app.use((err, req, res, next) => {
    logger.error(err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
});

/**
 * Start server
 */
startServer(app);