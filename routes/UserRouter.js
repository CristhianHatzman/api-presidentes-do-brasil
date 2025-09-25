import express from "express";
const UserRouter = express.Router();
import UserController from "../controllers/userController.js";
import userController from "../controllers/userController.js";

UserRouter.post("/login", UserController.loginUser);
UserRouter.post("/register", userController.createUser);

export default UserRouter;
