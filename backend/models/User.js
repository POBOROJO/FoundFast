import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: [/\S+@\S+\.\S+/, 'is invalid'] 
    },
    password:{
        type:String,
        required:true,
    },
    // isAdmin:{
    //     type:Boolean,
    //     default:false,
    // }
    phone:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:(value)=>{
                return /^\d{10}$/.test(value);
            },
            message:props=>`${props.value} is not a valid phone number`
        }
    },
},
{
    timestamps:true
});

export const User = mongoose.model("User",UserSchema);