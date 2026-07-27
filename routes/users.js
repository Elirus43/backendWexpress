var express = require('express');
var router = express.Router();
const User = require('../controllers/UserController')
const {verify, checkRole} = require('../middleware/auth');

router.post('/register', verify, checkRole('Admin'), User.registerUser);
router.post('/login', User.loginUser);

module.exports = router;
