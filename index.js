import express from 'express'
import cors from 'cors'
import employeesRouter from './routes/employeesRouter.js'
import departmentRouter from './routes/departmentRouter.js'
import attendanceRouter from './routes/attendanceRouter.js'
import leaveReasonRouter from './routes/leaveReasonRouter.js'
import leaveRequestRouter from './routes/leaveRequestRouter.js'
import payrollRouter from './routes/payrollRouter.js'

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())

app.use('/employees',employeesRouter)
app.use('/department',departmentRouter)
app.use('/attendance',attendanceRouter)
app.use('/leave_reason_lookup',leaveReasonRouter )
app.use('/leaverequest',leaveRequestRouter)
app.use('/payroll', payrollRouter)

app.listen(PORT,()=>{
    console.log('http://localhost:'+ PORT);
    
})










