import express from 'express'
import { getEmployeesCon, getSingleEmployeeCon, insertEmployeeCon, removeEmployeeCon, updateEmployeeCon} from '../controller/employeesController.js'


const router = express.Router()

router.get('/',getEmployeesCon)
router.get('/:employee_id',getSingleEmployeeCon )
router.post('/', insertEmployeeCon)
router.patch('/:employee_id', updateEmployeeCon)
router.delete('/:employee_id', removeEmployeeCon)

export default router