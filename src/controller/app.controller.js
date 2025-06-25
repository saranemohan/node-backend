import { MESSAGES } from '../config/constant.config.js';
import appService from '../service/app.service.js';
import { isGeneralException } from '../utils/commons.js';
import logger from '../utils/logger.js';

/**
 * Create Controller
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const create = async (req, res) => {
    try {
        const { title, description } = req.body;
        const appData = await appService.createData(title, description);
        if (appData) {
            res.status(200).json({ success: true, data: appData });
        } else {
            throw new Error(MESSAGES.DATA_CREATION_FAILED);
        }
    } catch (err) {
        logger.error(err)
        if (isGeneralException(err)) {
            res.status(400).json({ success: false, message: err.message });
        } else {
            throw err;
        }
    }
}

const appController = { create };

export default appController;