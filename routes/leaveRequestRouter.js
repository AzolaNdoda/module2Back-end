

app.get('/leaverequest',async(req,res)=>{
    res.json({leaverequest: await getLeaveRequest()})
})