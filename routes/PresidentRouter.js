import express from "express";
const PresidentRouter = express.Router();
import PresidentsController from "../controllers/presidentController.js";

PresidentRouter.get("/presidents", PresidentsController.getAllPresidents);
PresidentRouter.post("/presidents", PresidentsController.createPresident);
PresidentRouter.delete("/presidents/:id", PresidentsController.deletePresident);
PresidentRouter.put("/presidents/:id", PresidentsController.updatePresident);
PresidentRouter.get("/presidents/:id", PresidentsController.getOnePresident);

export default PresidentRouter;