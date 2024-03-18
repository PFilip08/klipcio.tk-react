import {Router} from "express";
import {getAllServers, getServerById, createServer, deleteServer, updateServer} from "../controllers/servers.controller.js";
import {authJWT} from "../controllers/auth.controller.js";

const serversRouter = Router();

serversRouter.get("/", getAllServers);
serversRouter.get("/:id", getServerById);
serversRouter.post("/", authJWT, createServer);
serversRouter.put("/:id", authJWT, updateServer);
serversRouter.delete("/:id", authJWT, deleteServer);
export default serversRouter;