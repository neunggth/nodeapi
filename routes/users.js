const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
/* GET users listing. */
// http://localhost:3000/users
router.get('/',userController.index);

// http://localhost:3000/login
router.get('/login', userController.login);


module.exports = router;
