import {Router} from "express";
import {getAllSites, getSiteById, createSite, deleteSite, updateSite} from "../controllers/sites.controller.js";
import {authJWT} from "../controllers/auth.controller.js";

const sitesRouter = Router();

sitesRouter.get("/", getAllSites);
sitesRouter.get("/:id", getSiteById);
sitesRouter.post("/", authJWT, createSite);
sitesRouter.put("/:id", authJWT, updateSite);
sitesRouter.delete("/:id", authJWT, deleteSite);
export default sitesRouter;