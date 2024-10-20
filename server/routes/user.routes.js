import express from "express";

import { getAllUsers, getUserById, createUser } from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.route("/").get(getAllUsers);
userRouter.route("/:id").get(getUserById);
userRouter.route("/").post(createUser);

export default userRouter;
