import { pool } from "../config/config.js"


const getEmployees = async ()=>{
    let [data] = await pool.query('SELECT * FROM employees')
    return data
}
const getSingleEmployee = async (employee_id)=>{
    let [data] = await pool.query('SELECT * FROM hr_system.employees WHERE employee_id = 1',[employee_id])
    return data
}

const insertEmployee = async(name, gender, position, salary, employmentHistory, email, department_id)=>{
    await pool.query('INSERT INTO `hr_system`.`employees` (`name`, `gender`, `position`, `salary`, `employmentHistory`, `email`, `department_id`) VALUES (?, ?, ?, ?, ?, ?',[name, gender, position, salary, employmentHistory, email, department_id])
}

const removeEmployee = async (employee_id)=>{
    await pool.query('DELETE FROM `hr_system`.`employees` WHERE `employee_id` = ?',[employee_id])

    return await getEmployees()
}

const updateEmployee = async (employee_id,position,salary,department_id)=>{
    await pool.query('UPDATE `hr_system`.`employees` SET `position` = ?, `salary` = ?, `department_id` = ? WHERE `employee_id` = ?',[employee_id,position,salary, department_id])

    return await getEmployees()

}

export {getEmployees, getSingleEmployee, insertEmployee, removeEmployee, updateEmployee}