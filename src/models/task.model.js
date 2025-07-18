import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required : true,
            trim : true,
        },
        completed : {
            type : Boolean,
            default : false
        }
    },{timestamps:true}
)

export const Task = mongoose.model("Task",TaskSchema)