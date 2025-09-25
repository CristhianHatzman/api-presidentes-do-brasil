import express from "express";
const PresidentRouter = express.Router();
import PresidentsController from "../controllers/presidentController.js";
import Auth from "../middleware/Auth.js";

PresidentRouter.get(
  "/ver",
  Auth.Authorization,
  PresidentsController.getAllPresidents
);
PresidentRouter.post(
  "/adiciona",
  Auth.Authorization,
  PresidentsController.createPresident
);
PresidentRouter.delete(
  "/delete/:id",
  Auth.Authorization,
  PresidentsController.deletePresident
);
PresidentRouter.put(
  "/altera/:id",
  Auth.Authorization,
  PresidentsController.updatePresident
);
PresidentRouter.get(
  "/ver/:id",
  Auth.Authorization,
  PresidentsController.getOnePresident
);

export default PresidentRouter;
