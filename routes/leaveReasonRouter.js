import express from 'express'
import { getLeaveReasonCon, getSingleReasonCon, insertLeaveReasonCon, removeLeaveReasonCon, updateLeaveReasonCon } from '../controller/leaveReasonController.js'

const router = express.Router()


router.get('/', getLeaveReasonCon)

router.get('/:attendance_id',getSingleReasonCon)

router.post('/',insertLeaveReasonCon)

router.patch('/:attendance_id',updateLeaveReasonCon)

router.delete('/:attendance_id',removeLeaveReasonCon)

export default router