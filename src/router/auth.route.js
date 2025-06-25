import express from 'express';
import appController from '../controller/app.controller.js';
import appDataCreateValidator from '../validators/app-data-create.validator.js';

const router = express.Router();

/**
 * All app related routes defined here
 */
router.post('/create', appDataCreateValidator ,appController.create);

export default router;