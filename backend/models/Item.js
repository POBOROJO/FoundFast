import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    status:{
        type:String,
        enum:["lost","found"],
        required:true,
    },
    image:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    createAt:{
        type:Date,
        default:Date.now,
    },
})

export const Item = mongoose.model("Item",ItemSchema);