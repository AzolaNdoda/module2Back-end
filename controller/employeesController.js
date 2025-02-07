import { getEmployees, getSingleEmployee, insertEmployee, updateEmployee, removeEmployee } from "../model/employeesDb.js"

const getEmployeesCon = async(req,res)=>{
    res.json({employees: await getEmployees()})
}

const getSingleEmployeeCon = async(req,res)=>{
    res.json({employee: await getSingleEmployee(employee_id)})
}

const insertEmployeeCon = async(req,res)=>{
    let {employee_id, name, gender, position, salary, email, department_id} = req.body

    res.json({employees: await insertEmployee(employee_id, name, gender, position, salary, email, department_id)})
}

const updateEmployeeCon = async(req,res)=>{
    console.log(req.params.employee_id);
    
    res.json({employee: await updateEmployee(employee_id,position,salary, department_id)})
}

const removeEmployeeCon = async(req,res)=>{
    res.json({employee: await removeEmployee(req.params.employee_id)})
}

export {getEmployeesCon, getSingleEmployeeCon, insertEmployeeCon, updateEmployeeCon, removeEmployeeCon}