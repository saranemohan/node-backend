import dotenv from 'dotenv'
import logger from '../utils/logger.js';

dotenv.config()

const PORT = process.env.PORT || 6001;
const HOST =  process.env.HOST || '0.0.0.0';

const startServer = (app) => {

  const server = app.listen(PORT, HOST, () => {
    logger.info(`Server running at http://${HOST}:${PORT}`);
  });

  server.on('error', (err) => {
    logger.error('Server failed to start:', err.message);
    process.exit(1);
  });

};


export default startServer;