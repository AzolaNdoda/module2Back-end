import express from 'express'
import { getDepartmentCon, getSingleDepartmentCon, insertDepartmentCon, removeDepartmentCon, updateDepartmentCon } from '../controller/departmentController.js'
const router = express.Router()

router.get('/',getDepartmentCon)

router.get('/:department_id',getSingleDepartmentCon)

router.post('/',insertDepartmentCon)

router.patch('/:department_id',updateDepartmentCon)

router.delete('/:department_id',removeDepartmentCon)

export default router