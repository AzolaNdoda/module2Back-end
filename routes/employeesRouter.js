const express = require('express');
const employeesController = require('../controllers/employeesController.js'); // Ensure this file exists

const router = express.Router();

// Destructure controller functions
const { getEmployeesCon, getSingleEmployeeCon, insertEmployeeCon, updateEmployeeCon, removeEmployeeCon } = employeesController;

router.get('/', getEmployeesCon);
router.get('/:employee_id', getSingleEmployeeCon);
router.post('/', insertEmployeeCon);
router.patch('/:employee_id', updateEmployeeCon);
router.delete('/:employee_id', removeEmployeeCon);

module.exports = router;  // Use module.exports for CommonJS
