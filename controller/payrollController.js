import { getPayroll, getSinglePayroll, insertPayroll, updatePayroll, removePayroll } from "../model/payrollDb.js"

const getPayrollCon = async(req,res)=>{
    res.json({payroll: await getPayroll()})
}

const getSinglePayrollCon = async(req,res)=>{
    res.json({payroll: await getSinglePayroll(pay_id)})
}


const insertPayrollCon = async(req,res)=>{
    let {pay_id, name, hours_worked, leave_deductions, final_salary} = req.body

    res.json({payroll: await insertPayroll(pay_id, name, hours_worked, leave_deductions, final_salary)})
}

const updatePayrollCon = async(req,res)=>{
    console.log(req.params.pay_id);
    
    res.json({payroll: await updatePayroll(pay_id,hours_worked,leave_deductions, final_salary)})
}

const removePayrollCon = async(req,res)=>{
    res.json({payroll: await removePayroll(req.params.pay_id)})
}

export {getPayrollCon, getSinglePayrollCon, insertPayrollCon, updatePayrollCon, removePayrollCon}