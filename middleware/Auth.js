import jwt from "jsonwebtoken";
import userController from "../controllers/userController.js";

const Authorization = (req, res, next) => {
  const authToken = req.headers["authorization"];
  if (authToken != undefined) {
    next();
  } else {
    res.status(401).json({ error: "Token inválido para continuar!" });
  }
};

export default { Authorization };
