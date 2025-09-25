import mongoose from "mongoose";

const dbPassword = "UvaRoxa2504";

const connect = () => {
  mongoose.connect(
    `mongodb+srv://cristhianfatec:${dbPassword}@cluster0.crswihy.mongodb.net/api-presidents?retryWrites=true&w=majority&appName=Cluster0`
  );
  const connection = mongoose.connection;

  connection.on("error", () => {
    console.log("Erro ao conectar com o MongoDB.");
  });
  connection.on("open", () => {
    console.log("Conetado com o mongoDB com sucesso!");
  });
};
connect();
export default mongoose;
