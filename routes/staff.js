const express =require('express')
const router = express.Router()
const staffController = require('../controllers/staffController')

// Index 
// http://localhost:3000/staff/
router.get('/',staffController.index);

// Get by id (findId)
// http://localhost:3000/staff/5ee9fd01a31d372c3c11d59c
router.get('/:id',staffController.show);

// Add Data
// http://localhost:3000/staff/
router.post('/',staffController.insert);

// Delete by id 
// http://localhost:3000/staff/5ee9fd01a31d372c3c11d59c
router.delete('/:id',staffController.destroy);

// Update by id 
// http://localhost:3000/staff/5ee9fd01a31d372c3c11d59c
router.put('/:id',staffController.update);




module.exports = router; 