import {Router} from "express";
import {getAllBots, getBotById, createBot, deleteBot, updateBot} from "../controllers/bots.controller.js";
import {authJWT} from "../controllers/auth.controller.js";

const botsRouter = Router();

botsRouter.get("/", getAllBots);
botsRouter.get("/:id", getBotById);
botsRouter.post("/", authJWT, createBot);
botsRouter.put("/:id", authJWT, updateBot);
botsRouter.delete("/:id", authJWT, deleteBot);
export default botsRouter;