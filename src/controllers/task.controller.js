import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Task } from "../models/task.model.js";

const addTask = asyncHandler(async(req,res) => {
    const { title,completed } = req.body;
    if(!title){
        throw new ApiError(400,"Task Doesn't add successfully")
    }

    const newTask = await Task.create({ title, completed });
    console.log("Task added successfully");

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            "Task add successfully",
            newTask,
        )
    )
    
})

const removeTask = asyncHandler(async(req,res) => {
    const { id } = req.params;
    
    const findTask = await Task.findById(id)
    if(!findTask){
        throw new ApiError(4001,"Task is not present")
    }

    await Task.findByIdAndDelete(id);
    console.log("Task remove successfully");
    

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            "Task removed successfuly",
        )
    )
})

const updateTask = asyncHandler(async(req,res) => {

    const {id} = req.params;
    const {title,completed} = req.body;

    if(!title || !completed){
        throw new ApiError(400 ," All Fields are required")
    }

    const update = await Task.findByIdAndUpdate(
        id,
        {title,completed},
        {new : true}
    );

    console.log("Task update successfully");

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            "Task update successfully",
            update,
        )
    )
    
})

export {
    addTask,
    removeTask,
    updateTask,
}