import UserService from "../services/UserService.js";
import jwt from "jsonwebtoken";

const JWTSecret = "api-presidentes";

const createUser = async (req, res) => {
  try {
    const { name, email, password, fone } = req.body;
    await UserService.CreateUser(name, email, password, fone);
    res.status(201).json({ success: "Usuário criado com sucesso!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.GetOneUser(email);
    if (user != undefined) {
      if (user.password == password) {
        jwt.sign(
          { id: user.id, email: user.email },
          JWTSecret,
          {
            expiresIn: "500h",
          },
          (error, token) => {
            if (error) {
              res.status(400).json({
                error:
                  "Não foi possível gerar um token de autenticação para o usuário.",
              });
            } else {
              res.status(200).json({ token });
            }
          }
        );
      } else {
        res
          .status(401)
          .json({ error: "Credenciais informadas estão incorretas." });
      }
    } else {
      res.status(404).json({ error: "Usuário informado não encontrado." });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};

export default { createUser, loginUser };
