const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String,
    },password:{
        type:String
    },
    age:{
        type:Number
    }
    
})

module.exports =  mongoose.model('user',UserSchema)