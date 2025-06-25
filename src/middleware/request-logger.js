import morgan from "morgan";
import logger from "../utils/logger.js";

const logAllRequests = (app)=>{
    app.use(morgan('dev'));
    app.use(morgan('combined',{ stream: { write: (message)=>{ logger.info(message) } } }));
}

export default logAllRequests;