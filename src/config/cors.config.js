import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT
const HOST = process.env.HOST
const FRONTEND_URI = process.env.FRONTEND_URI

const whitelist = [`http://${HOST}:${PORT}`,FRONTEND_URI]
const corsOptions = {
    origin:(origin, callback) => {
        if(whitelist.indexOf(origin) !== -1){
            callback(null, true)
        }else{
            callback(new Error('Not allowed by CORS'))
        }
    },
    methods: ['GET', 'POST']
};

const corsConfig = cors(corsOptions)

export default corsConfig