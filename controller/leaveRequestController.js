import { getLeaveRequest, getSingleLeaveRequest, insertLeaveRequest, updateLeaveRequest, removeLeaveRequest } from "../model/leaveRequestDb.js"
const getLeaveRequestCon = async(req,res)=>{
    res.json({leaveRequest: await getLeaveRequest()})
}

const getSingLeaveRequestCon = async(req,res)=>{
    res.json({leaveRequest: await getSingleLeaveRequest(leaveRequest_id)})
}

const insertLeaveRequestCon = async(req,res)=>{
    let {leaveRequest_id, employee_id, leave_date, leave_status} = req.body

    res.json({leaveRequest: await insertLeaveRequest(leaveRequest_id, employee_id, leave_date, leave_status)})
}

const updateLeaveRequestCon = async(req,res)=>{
    console.log(req.params.leaveRequest_id);
    
    res.json({leaveRequest: await updateLeaveRequest(leaveRequest_id, employee_id, leave_date, leave_status)})
}

const removeLeaveRequestCon = async(req,res)=>{
    res.json({leaveRequest: await removeLeaveRequest(req.params.leaveRequest_id)})
}

export {getLeaveRequestCon, getSingLeaveRequestCon, insertLeaveRequestCon, updateLeaveRequestCon, removeLeaveRequestCon}