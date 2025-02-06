import express from 'express'
import { getPayrollCon, getSinglePayrollCon, insertPayrollCon, removePayrollCon, updatePayrollCon } from '../controller/payrollController.js'

const router = express.Router()

router.get('/',getPayrollCon)

router.get('/:pay_id',getSinglePayrollCon)

router.post('/',insertPayrollCon)

router.patch('/:pay_id',updatePayrollCon)

router.delete('/:pay_id',removePayrollCon)

export default router