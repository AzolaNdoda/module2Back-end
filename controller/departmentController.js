import { getDepartment, getSingleDepartment, insertDepartment, updateDepartment, removeDepartment} from "../model/departmentDb.js"

const getDepartmentCon = async(req,res)=>{
    res.json({department: await getDepartment()})
}

const getSingleDepartmentCon = async(req,res)=>{
    res.json({department: await getSingleDepartment(employee_id)})
}

const insertDepartmentCon = async(req,res)=>{
    let {department_id, departmnent_name} = req.body

    res.json({department: await insertDepartment(department_id, departmnent_name)})
}

const updateDepartmentCon = async(req,res)=>{
    console.log(req.params.department_id);
    
    res.json({department: await updateDepartment(department_id, departmnent_name)})
}

const removeDepartmentCon = async(req,res)=>{
    res.json({department: await removeDepartment(req.params.department_id)})
}

export {getDepartmentCon, getSingleDepartmentCon, insertDepartmentCon, updateDepartmentCon, removeDepartmentCon}