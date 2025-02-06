import { pool } from "../config/config.js"


const getPayroll = async ()=>{
    let [data] = await pool.query('SELECT * FROM hr_system.payroll')
    return data
}
const getSinglePayroll = async (pay_id)=>{
    let [data] = await pool.query('SELECT * FROM hr_system.payroll WHERE pay_id = 1',[pay_id])
    return data
}

const insertPayroll = async(pay_id, name, hourly_rate, hours_worked, leave_deductions, final_salary )=>{
    await pool.query('INSERT INTO `hr_system`.`payroll` (`pay_id`, `name`, `hourly_rate`, `hours_worked`, `leave_deductions`, `final_salary`) VALUES (?, ?, ?, ?, ?, ?)',[pay_id, name, hourly_rate, hours_worked, leave_deductions, final_salary])
}

const removePayroll = async (pay_id)=>{
    await pool.query('DELETE FROM `hr_system`.`payroll` WHERE `pay_id` = ?',[pay_id])

    return await getPayroll()
}

const updatePayroll = async (pay_id, name, hourly_rate, hours_worked, leave_deductions, final_salary)=>{
    await pool.query('UPDATE `hr_system`.`pay_id` SET `name` = ?, `hourly_rate` = ?, `hours_worked` = ?, `leave_deductions` = ?, `final_salary` = ? WHERE `pay_id` = ?',[pay_id, name, hourly_rate, hours_worked, leave_deductions, final_salary])

    return await getPayroll()

}

export {getPayroll, getSinglePayroll, insertPayroll, updatePayroll, removePayroll}