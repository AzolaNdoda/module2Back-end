import { getLeaveReason, getSingleLeaveReason, insertLeaveReason, updateLeaveReason, removeLeaveReason } from "../model/leaveReasonDb.js"

const getLeaveReasonCon = async(req,res)=>{
    res.json({leave_reason_lookup: await getLeaveReason()})
}

const getSingleReasonCon = async(req,res)=>{
    res.json({leaveReasonLookup: await getSingleLeaveReason(leaveReason_id)})
}

const insertLeaveReasonCon = async(req,res)=>{
    let {leaveReason_id, name, leaveReason, description} = req.body

    res.json({leaveReasonLookup: await insertLeaveReason(leaveReason_id, name, leaveReason, description)})
}

const updateLeaveReasonCon = async(req,res)=>{
    console.log(req.params.leaveReason_id);
    
    res.json({leaveReasonLookup: await updateLeaveReason(leaveReason_id, name, leaveReason, description)})
}

const removeLeaveReasonCon = async(req,res)=>{
    res.json({leaveReasonLookup: await removeLeaveReason(req.params.leaveReason_id)})
}

export {getLeaveReasonCon, getSingleReasonCon, insertLeaveReasonCon, updateLeaveReasonCon, removeLeaveReasonCon}