import express from 'express'
import { getLeaveRequestCon, getSingLeaveRequestCon, insertLeaveRequestCon, removeLeaveRequestCon, updateLeaveRequestCon } from '../controller/leaveRequestController.js'

const router = express.Router()

router.get('/',getLeaveRequestCon)

router.get('/:leaveRequest_id',getSingLeaveRequestCon)

router.post('/',insertLeaveRequestCon)

router.patch('/:leaveRequest_id',updateLeaveRequestCon)

router.delete('/:leaveRequest_id',removeLeaveRequestCon)

export default router