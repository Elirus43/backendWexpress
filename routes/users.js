var express = require('express');
var router = express.Router();
const User = require('../controllers/UserController')

router.post('/register', User.registerUser);
router.post('/login', User.loginUser);

module.exports = router;
