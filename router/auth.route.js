import express from 'express';
import appController from '../controller/app.controller.js';
import asyncHandler from '../middleware/asyncHandler.js';

const router = express.Router();

/**
 * All app related routes defined here
 */
router.post('/create', appController.create);

export default router;