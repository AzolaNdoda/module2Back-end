import { pool } from "../config/config.js"


const getLeaveRequest = async ()=>{
    let [data] = await pool.query('SELECT * FROM hr_system.leaverequest')
    return data
}
const getSingleLeaveRequest = async (leaveRequest_id)=>{
    let [data] = await pool.query('SELECT * FROM hr_system.leaverequest WHERE leaveRequest_id = 1',[leaveRequest_id])
    return data
}

const insertLeaveRequest = async(leaveRequest_id, employee_id, leave_date, leave_status)=>{
    await pool.query('INSERT INTO `hr_system`.`leaverequest` (`leaveRequest_id`, `employee_id`, `leave_date`, `leave_status`) VALUES (?, ?, ?, ?)',[leaveRequest_id,employee_id, leave_date, leave_status])
}

const removeLeaveRequest = async (leaveRequest_id)=>{
    await pool.query('DELETE FROM `hr_system`.`leaverequest` WHERE `leaveRequest_id` = ?',[leaveRequest_id])

    return await getLeaveRequest()
}

const updateLeaveRequest = async (leaveRequest_id, employee_id, leave_date, leave_status)=>{
    await pool.query('UPDATE `hr_system`.`department` SET `employee_id` = ?, `leave_date` = ?, `leave_status` = ? WHERE `leaveRequest_id` = ?',[leaveRequest_id,employee_id, leave_date, leave_status])

    return await getLeaveRequest()

}

export {getLeaveRequest, getSingleLeaveRequest, insertLeaveRequest, updateLeaveRequest, removeLeaveRequest}