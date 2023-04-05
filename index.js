const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app=express()
app.use(cors())
app.use(express.json())

const UserSchema = require('./schema/userSchema') 

app.get('/user',(req,res)=>{

    UserSchema.find().then((data)=>{
        console.log(data);
        res.status(200).json({
            data:data,
            message:"Data Found..."
        })   
    }).catch((err)=>{
        res.status(404).json({
            message:"Data not Found!!"
        })
    })
})

app.post('/user',(req,res)=>{
    const user = new UserSchema(req.body)

    user.save();
    res.send(user)
})

app.get('/user/:id',(req,res)=>{

    const id = req.params.id
    UserSchema.findById(id).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.status(404).json({
            message:"Data not Found!!"
        })
    })
   
})

mongoose.connect('mongodb://127.0.0.1:27017/taskDB').then(()=>{
    console.log('db connected!!');
})

const PORT=4000
app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`);
    
})