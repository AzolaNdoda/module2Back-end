import { pool } from "../config/config.js"

const getLeaveReason = async ()=>{
    let [data] = await pool.query('SELECT * FROM hr_system.leave_reason_lookup')
    return data
}
const getSingleLeaveReason = async (leaveReason_id)=>{
    let [data] = await pool.query('SELECT * FROM hr_system.leaveReason WHERE leaveReason_id = 1',[leaveReason_id])
    return data
}

const insertLeaveReason = async(name, leaveReason, description)=>{
    await pool.query('INSERT INTO `hr_system`.`leaveReason` (`leaveReason_id`, `name`, `leaveReason`, `description`) VALUES (?, ?, ?, ?)',[name, leaveReason, description])
}

const removeLeaveReason = async (leaveReason_id)=>{
    await pool.query('DELETE FROM `hr_system`.`leaveReason` WHERE `leaveReason_id` = ?',[leaveReason_id])

    return await getleaveReason()
}

const updateLeaveReason = async (leaveReason_id, leaveReason_name)=>{
    await pool.query('UPDATE `hr_system`.`leaveReason` SET `leaveReason_name` = ? WHERE `leaveReason_id` = ?',[leaveReason_id,leaveReason_name])

    return await getleaveReason()
}

export {getLeaveReason, getSingleLeaveReason, insertLeaveReason, removeLeaveReason, updateLeaveReason}