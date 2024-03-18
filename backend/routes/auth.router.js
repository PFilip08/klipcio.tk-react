import {Router} from "express";
import {auth, authJWT, createUser} from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/", auth);
// authRouter.post("/add", authJWT, createUser);s

export default authRouter;