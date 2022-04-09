const express = require('express');
const { registerUser, loginUser } = require('../controllers/auth');
const { authRegisterValidation, authLoginValidation } = require('../middlewares/auth.validations');
const { validateErrors } = require('../middlewares/validateErrors');
const router = express.Router();

// Register
router.post(
    '/register',
    authRegisterValidation,
    validateErrors,
    registerUser,
);

// Login
router.post(
    '/login',
    authLoginValidation,
    validateErrors,
    loginUser
);

module.exports = router;
