import express from 'express'
import { getAttendanceCon, getSingleAttendanceCon, insertAttendanceCon, removeAttendanceCon, updateAttendanceCon, } from '../controller/attendanceController.js'

const router = express.Router()

router.get('/', getAttendanceCon)

router.get('/:attendance_id',getSingleAttendanceCon)

router.post('/',insertAttendanceCon)

router.patch('/:attendance_id',updateAttendanceCon)

router.delete('/:attendance_id',removeAttendanceCon)

export default router