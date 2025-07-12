import mongoose from "mongoose";
import { DB_NAME } from "../constant.js"
import { ApiError } from "../utils/ApiError.js";

const connectDB = async ()=> {
    try {
        const connectInstances = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`DB CONNECTION SUCCESSFULLY ${connectInstances.connection.host}`);
    }catch (error) {
        throw new ApiError(`DB CONNECTION FAILED !!  ${error}`)
    }
}

export default connectDB