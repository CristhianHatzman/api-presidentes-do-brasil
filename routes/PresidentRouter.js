import express from "express";
const PresidentRouter = express.Router();
import PresidentsController from "../controllers/presidentController.js";

PresidentRouter.get("/ver", PresidentsController.getAllPresidents);
PresidentRouter.post("/adiciona", PresidentsController.createPresident);
PresidentRouter.delete("/delete/:id", PresidentsController.deletePresident);
PresidentRouter.put("/altera/:id", PresidentsController.updatePresident);
PresidentRouter.get("/ver/:id", PresidentsController.getOnePresident);

export default PresidentRouter;