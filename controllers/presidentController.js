import { ObjectId } from "mongodb";
import PresidentService from "../services/PresidentService.js";

// Buscar todos os presidentes
const getAllPresidents = async (req, res) => {
  try {
    const presidents = await PresidentService.GetAll();
    res.status(200).json({ presidents });
    // 200: OK
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Erro interno no servidor." });
    // 500: Internal Server Error
  }
};

// Criar novo presidente
const createPresident = async (req, res) => {
  try {
    const {
      name,
      birthDate,
      deathDate,
      birthPlace,
      profession,
      mandates,
      biography,
      imageUrl,
      curiosities,
    } = req.body;

    await PresidentService.CreatePresident(
      name,
      birthDate,
      deathDate,
      birthPlace,
      profession,
      mandates,
      biography,
      imageUrl,
      curiosities
    );

    res.status(201).send({ message: "Presidente criado com sucesso!" });
    // 201: Created
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Erro interno no servidor." });
  }
};

// Deletar presidente
const deletePresident = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const deletedPresident = await PresidentService.DeletePresident(id);
      if (deletedPresident) {
        res.status(200).send({ message: "Presidente deletado com sucesso!" });
      } else {
        res.status(404).send({ error: "Presidente não encontrado." });
      }
    } else {
      res.status(400).send({ error: "ID inválido." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Erro interno no servidor." });
  }
};

// Atualizar presidente
const updatePresident = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const {
        name,
        birthDate,
        deathDate,
        birthPlace,
        profession,
        mandates,
        biography,
        imageUrl,
        curiosities,
      } = req.body;

      const updatedPresident = await PresidentService.UpdatePresident(
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
      );

      if (updatedPresident) {
        res.status(200).send({ message: "Presidente atualizado com sucesso!" });
      } else {
        res.status(404).send({ error: "Presidente não encontrado." });
      }
    } else {
      res.status(400).send({ error: "ID inválido." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Erro interno no servidor." });
  }
};

// Buscar presidente por ID
const getOnePresident = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const president = await PresidentService.GetOne(id);
      if (president) {
        res.status(200).json({ president });
      } else {
        res.status(404).json({ error: "Presidente não encontrado." });
      }
    } else {
      res.status(400).json({ error: "ID inválido." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
};

export default {
  getAllPresidents,
  createPresident,
  deletePresident,
  updatePresident,
  getOnePresident,
};
