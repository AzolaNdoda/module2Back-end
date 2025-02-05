


app.get('/attendance',async(req,res)=>{
    res.json({attendance: await getAttendance()})
})