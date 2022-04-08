const express = require('express');
const router = express.Router();

// Register
router.post('/register', function(req, res, next) {
  res.send('REGISTER');
});

// Login
router.post('/login', function(req, res, next) {
  res.send('LOGIN');
});

module.exports = router;
