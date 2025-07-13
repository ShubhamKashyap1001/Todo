import { Router } from "express";
import { addTask } from "../controllers/task.controller.js";
import { removeTask } from "../controllers/task.controller.js";
import { updateTask } from "../controllers/task.controller.js";


const router = Router();

router.route('/addTask').post(addTask);
router.route('/removeTask/:id').delete(removeTask);
router.route('/updateTask/:id').put(updateTask);

export default router;