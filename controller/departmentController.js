

const getDepartmentCon = async(req,res)=>{
    res.json({department: await getDepartment()})
}