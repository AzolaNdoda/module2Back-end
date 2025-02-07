import { pool } from "../config/config.js"


const getEmployees = async ()=>{
    let [data] = await pool.query('SELECT * FROM employees')
    return data
}
const getSingleEmployee = async (employee_id)=>{
    try {
        let [data] = await pool.query('SELECT * FROM hr_system.employees WHERE employee_id = ?', [employee_id]);
        return data;
      } catch (error) {
        console.error("Error fetching employee:", error);
        throw error;
      }
}

const insertEmployee = async(name, gender, position, salary, employmentHistory, email, department_id)=>{
    await pool.query('INSERT INTO `hr_system`.`employees` (`name`, `gender`, `position`, `salary`, `employmentHistory`, `email`, `department_id`) VALUES (?, ?, ?, ?, ?, ?',[name, gender, position, salary, employmentHistory, email, department_id])

    return { employee: employee_id, name, position, salary };

}

const removeEmployee = async (employee_id)=>{
    const result = await pool.query('DELETE FROM `hr_system`.`employees` WHERE `employee_id` = ?', [employee_id]);
return result.affectedRows > 0 ? "Employee removed successfully" : "Employee not found";

}

const updateEmployee = async (employee_id,position,salary,department_id)=>{
    await pool.query('UPDATE `hr_system`.`employees` SET `position` = ?, `salary` = ?, `department_id` = ? WHERE `employee_id` = ?',[employee_id,position,salary, department_id])

    return await getEmployees()

}

export {getEmployees, getSingleEmployee, insertEmployee, removeEmployee, updateEmployee}