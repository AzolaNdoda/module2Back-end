import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())

app.listen(PORT,()=>{
    console.log('http://localhost:'+ PORT);
    
})

app.get('/employees',async(req,res)=>{
    res.json({employees: await getEmployees()})
})
app.get('/employees/:employee_id',async(req,res)=>{
    res.json({employee: await getSingleEmployee()})
} )
app.get('/department',async(req,res)=>{
    res.json({department: await getDepartment()})
})
app.get('/attendance',async(req,res)=>{
    res.json({attendance: await getAttendance()})
})
app.get('/leave_reason_lookup', async(req,res)=>{
    res.json({leave_reason_lookup: await getLeaveReason()})
})
app.get('/leaverequest',async(req,res)=>{
    res.json({leaverequest: await getLeaveRequest()})
})
app.get('/payroll',async(req,res)=>{
    res.json({})
})

const getEmployees = async ()=>{
    let [data] = await pool.query('SELECT * FROM employees')
    return data
}