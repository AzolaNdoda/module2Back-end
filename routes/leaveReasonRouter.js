

app.get('/leave_reason_lookup', async(req,res)=>{
    res.json({leave_reason_lookup: await getLeaveReason()})
})