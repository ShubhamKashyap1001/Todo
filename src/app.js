import express from "express"
import connectDB from "./db/index.js"
import taskRouter from "./routes/task.route.js"
import { configDotenv } from "dotenv";

configDotenv();


connectDB();

const app = express()
app.use(express.json());
app.use("/api/v1/task", taskRouter);
app.listen(process.env.PORT || 4000,() => {
    console.log(`Server is running at port ${process.env.PORT}`);
})

export default app;