const { body } = require('express-validator');

const projectValidations = [
    body('name')
        .notEmpty()
        .withMessage('Input required')
        .bail()
        .isString()
        .withMessage('The value should be type string.')
        .isLength({ min: 4 })
        .withMessage('String must be more than 3 characters')
        .bail(),
    body('description')
        .notEmpty()
        .withMessage('Input required')
        .bail()
        .isString()
        .withMessage('The value should be type string.'),
    body('users')
        .notEmpty()
        .withMessage('Input required')
        .bail()
        .custom((value) => {
            return Array.isArray(value);
        })
        .withMessage('The value should be an array.'),
];

module.exports = {
    projectValidations,
};
