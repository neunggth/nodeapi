const express =require('express')
const router = express.Router()
const staffController = require('../controllers/staffController')

// http://localhost:3000/staff/
router.get('/',staffController.index);

// Get by id 
// http://localhost:3000/staff/5ee9fd01a31d372c3c11d59c
router.get('/:id',staffController.show);

// Delete by id 
// http://localhost:3000/staff/5ee9fd01a31d372c3c11d59c
router.delete('/:id',staffController.destroy);

// http://localhost:3000/staff/
router.post('/',staffController.insert);



module.exports = router; 