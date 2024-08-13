import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    feedback:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

export const Feedback = mongoose.model("Feedback", FeedbackSchema);