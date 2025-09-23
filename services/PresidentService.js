import President from "../models/President.js";

class PresidentService {
  // Buscar todos os presidentes
  async GetAll() {
    try {
      const presidents = await President.find();
      return presidents;
    } catch (error) {
      console.log(error);
    }
  }

  // Criar novo presidente
  async CreatePresident(
    name,
    birthDate,
    deathDate,
    birthPlace,
    profession,
    mandates,
    biography,
    imageUrl,
    curiosities
  ) {
    try {
      const newPresident = new President({
        name,
        birthDate,
        deathDate,
        birthPlace,
        profession,
        mandates,
        biography,
        imageUrl,
        curiosities,
      });
      await newPresident.save();
      return newPresident;
    } catch (error) {
      console.log(error);
    }
  }

  // Deletar presidente por ID
  async DeletePresident(id) {
    try {
      const deletedPresident = await President.findByIdAndDelete(id);
      return deletedPresident;
    } catch (error) {
      console.log(error);
    }
  }

  // Atualizar presidente
  async UpdatePresident(
    id,
    name,
    birthDate,
    deathDate,
    birthPlace,
    profession,
    mandates,
    biography,
    imageUrl,
    curiosities
  ) {
    try {
      const updatedPresident = await President.findByIdAndUpdate(
        id,
        {
          name,
          birthDate,
          deathDate,
          birthPlace,
          profession,
          mandates,
          biography,
          imageUrl,
          curiosities,
        },
        { new: true }
      );
      return updatedPresident;
    } catch (error) {
      console.log(error);
    }
  }

  // Buscar um presidente por ID
  async GetOne(id) {
    try {
      const president = await President.findById(id);
      return president;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new PresidentService();
