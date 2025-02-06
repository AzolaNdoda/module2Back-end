import { pool } from "../config/config.js"


const getAttendance = async ()=>{
    let [data] = await pool.query('SELECT * FROM hr_system.attendance')
    return data
}
const getSingleAttendance = async (attendance_id)=>{
    let [data] = await pool.query('SELECT * FROM hr_system.attendance WHERE attendance_id = 1',[attendance_id])
    return data
}

const insertAttendance = async(employee_id, date, attendance_status)=>{
    await pool.query('INSERT INTO `hr_system`.`attendance` (`employee_id`, `date`, `attendance_status`) VALUES (?, ?, ?)',[employee_id, date, attendance_status])

    return await getAttendance()
}

const removeAttendance = async (attendance_id)=>{
    await pool.query('DELETE FROM `hr_system`.`attendance` WHERE `attendance_id` = ?',[attendance_id])

    return await getattendance()
}

const updateAttendance = async (attendance_id, employee_id, date, attendance_status)=>{
    await pool.query('UPDATE `hr_system`.`attendance` SET `employee_id` = ?, `date` = ?, `attendance_status` = ? WHERE `attendance_id` = ?',[attendance_id,employee_id, date, attendance_status])

    return await getattendance()

}

export {getAttendance, getSingleAttendance, insertAttendance, removeAttendance, updateAttendance}

