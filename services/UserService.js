import User from "../models/User.js";

// Função para criação de um novo usuário.
class UserService {
  async CreateUser(name, email, password, fone) {
    try {
      const newUser = new User({
        name,
        email,
        password,
        fone,
      });
      await newUser.save();
    } catch (error) {
      console.log(error);
    }
  }
  // Função de pegar somente um usuário para conferir login
  async GetOneUser(email) {
    try {
      const user = await User.findOne({ email: email });
      // Retorna as informações do usuário para verificação
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserService();
