const { body } = require('express-validator');

const authRegisterValidation = [
    body('email')
    .notEmpty()
    .withMessage('Input required')
    .bail()
    .isString()
    .withMessage('The value should be type string.')
    .isLength({ min: 5 })
    .withMessage('String must be more than 4 characters')
    .bail(),
    body('password')
        .notEmpty()
        .withMessage('Input required')
        .bail()
        .isString()
        .withMessage('The value should be type string.')
        .isLength({ min: 5 })
        .withMessage('String must be more than 4 characters')
        .bail(),
    body('firstName')
        .notEmpty()
        .withMessage('Input required')
        .bail()
        .isString()
        .withMessage('The value should be type string.')
        .isLength({ min: 5 })
        .withMessage('String must be more than 4 characters')
        .bail(),
    body('lastName')
        .notEmpty()
        .withMessage('Input required')
        .bail()
        .isString()
        .withMessage('The value should be type string.')
        .isLength({ min: 5 })
        .withMessage('String must be more than 4 characters')
        .bail(),
];
const authLoginValidation = [
    body('email')
        .notEmpty()
        .withMessage('Input required')
        .bail()
        .isString()
        .withMessage('The value should be type string.')
        .isLength({ min: 5 })
        .withMessage('String must be more than 4 characters')
        .bail()
        .isEmail(),
    body('password')
        .notEmpty()
        .withMessage('Input required')
        .bail()
        .isString()
        .withMessage('The value should be type string.')
        .isLength({ min: 5 })
        .withMessage('String must be more than 4 characters')
        .bail(),
];

module.exports = {
    authLoginValidation,
    authRegisterValidation,
};

