import Express from "express";
const app = Express();

import mongoose from "./config/db-connection.js";

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

import President from "./models/President.js";
import PresidentRouter from "./routes/PresidentRouter.js";
import UserRouter from "./routes/UserRouter.js";

app.use("/presidents", PresidentRouter);
app.use("/login", UserRouter);

const PORT = 3500;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Servidor iniciado na porta: ${PORT}`);
});
