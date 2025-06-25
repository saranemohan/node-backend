import { body, validationResult } from 'express-validator';

const appDataCreateValidator = [
    body('title')
        .notEmpty().withMessage('Title is required'),
    body('description')
        .notEmpty().withMessage('Description is required')
        .isLength({ max: 5 }).withMessage('Description support maximum 100 characters'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const formattedErrors = errors.array().map(err => ({
                field: err.path,
                message: err.msg,
            }));
            return res.status(400).json({ errors: formattedErrors });
        }
        next();
    }
];

export default appDataCreateValidator;

