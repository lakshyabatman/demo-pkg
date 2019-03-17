const express= require('express');
const app=express();
app.use(express.static('public'))
app.get("/",(res,req)=>{
    res.render('index.html')
})

app.listen(3000,()=>{
    console.log("Server is running on 3000")
})