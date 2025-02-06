import { getAttendance, getSingleAttendance, insertAttendance, updateAttendance, removeAttendance } from "../model/attendanceDb.js"

const getAttendanceCon = async(req,res)=>{
    res.json({attendance: await getAttendance()})
}

const getSingleAttendanceCon = async(req,res)=>{
    res.json({attendance: await getSingleAttendance(attendance_id)})
}

const insertAttendanceCon = async(req,res)=>{
    let {attendance_id, employee_id, date, attendance_status} = req.body

    res.json({attendance: await insertAttendance(attendance_id, employee_id, date, attendance_status)})
}

const updateAttendanceCon = async(req,res)=>{
    console.log(req.params.attendance_id);
    
    res.json({attendance: await updateAttendance(attendance_id, employee_id, date, attendance_status)})
}

const removeAttendanceCon = async(req,res)=>{
    res.json({attendance: await removeAttendance(req.params.attendance_id)})
}

export {getAttendanceCon, getSingleAttendanceCon, insertAttendanceCon, updateAttendanceCon, removeAttendanceCon}