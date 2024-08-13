import mongoose from "mongoose";

const ClaimSchema = new mongoose.Schema({
    item:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Item",
        required:true
    },
    claimant:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    status:{
        type:String,
        enum:["pending","approved","rejected"],
        default:"pending",
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

export const Claim = mongoose.model("Claim",ClaimSchema)