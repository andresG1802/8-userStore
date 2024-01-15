import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  
    name : {
        type:String,
        required:[ true ,'Name is required']
    },
    email : {
        type:String,
        required:[ true ,'Name is required'],
        unique:true
    },
    emailValidated : {
        type:Boolean,
        default:false
    },
    password : {
        type:String,
        required:[ true ,'Name is required']
    },
    img : {
        type:String,
    },
    role:{
        //por que pueden ser varios roles
        type:[String],
        default:['USER_ROLE'],
        enum:['ADMING_ROLE','USER_ROLE']
    }
});

export const UserModel = mongoose.model('User',userSchema);
