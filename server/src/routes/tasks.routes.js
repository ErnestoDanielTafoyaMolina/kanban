import { Router } from "express";
const router = Router();
import { 
    handleCreateTask,
    handleDeleteTaskByID,
    handleGetAllTaskByLogedUser,
    handleGetTaskById,
    handleUpdateTaskById
} from "../controllers/tasks.controllers";

//get tasks
router.get("/tasks",handleGetAllTaskByLogedUser);
router.get("/task/:id", handleGetTaskById);

//create tasks
router.post("/task",handleCreateTask);

//update task information
router.patch("/task/:id",handleUpdateTaskById);

//delete task
router.delete("/task/:id", handleDeleteTaskByID);

export default router;