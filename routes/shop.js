const express =require('express')
const router = express.Router()
const shopController = require('../controllers/shopController')

// http://localhost:3000/shop/ 
router.get('/',shopController.index)

module.exports = router; 