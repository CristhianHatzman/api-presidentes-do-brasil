import express from "express";
const PresidentRouter = express.Router();
import PresidentsController from "../controllers/presidentController.js";
import Auth from "../middleware/Auth.js";

PresidentRouter.get(
  "/view",
  Auth.Authorization,
  PresidentsController.getAllPresidents
);
PresidentRouter.post(
  "/insert",
  Auth.Authorization,
  PresidentsController.createPresident
);
PresidentRouter.delete(
  "/drop/:id",
  Auth.Authorization,
  PresidentsController.deletePresident
);
PresidentRouter.put(
  "/alter/:id",
  Auth.Authorization,
  PresidentsController.updatePresident
);
PresidentRouter.get(
  "/view/:id",
  Auth.Authorization,
  PresidentsController.getOnePresident
);

export default PresidentRouter;
