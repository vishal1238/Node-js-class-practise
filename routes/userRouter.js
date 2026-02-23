import express from "express";
import {users} from "../models/userModel.js";
import { createUser, getUsers } from "../controllers/userController.js";

const userRouter = express.Router();
const getUsers = (req, res) => {
    res.json(users);
};

// userRouter.get("/", getUsers);
userRouter.post("/", createUser);

export default userRouter;