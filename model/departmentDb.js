import { pool } from "../config/config.js"


const getDepartment = async ()=>{
    let [data] = await pool.query('SELECT * FROM hr_system.department')
    return data
}
const getSingleDepartment = async (department_id)=>{
    let [data] = await pool.query('SELECT * FROM hr_system.department WHERE department_id = 1',[department_id])
    return data
}

const insertDepartment = async(department_id, department_name)=>{
    await pool.query('INSERT INTO `hr_system`.`department` (`department_id`, `department_name`) VALUES (?, ?)',[department_id,department_name])
}

const removeDepartment = async (department_id)=>{
    await pool.query('DELETE FROM `hr_system`.`department` WHERE `department_id` = ?',[department_id])

    return await getDepartment()
}

const updateDepartment = async (department_id, department_name)=>{
    await pool.query('UPDATE `hr_system`.`department` SET `department_name` = ? WHERE `department_id` = ?',[department_id,department_name])

    return await getDepartment()

}

export {getDepartment, getSingleDepartment, insertDepartment, removeDepartment, updateDepartment}