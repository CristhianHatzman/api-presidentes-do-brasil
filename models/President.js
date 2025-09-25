import mongoose from "mongoose";

const mandateSchema = new mongoose.Schema({
  startDate: Date, // início do mandato
  endDate: Date, // fim do mandato
  vicePresident: String, // vice-presidente
  party: String, // partido no período
  achievements: [String], // principais realizações (array de strings)
});

const presidentSchema = new mongoose.Schema({
  name: String, // nome completo
  birthDate: Date, // data de nascimento
  deathDate: Date, // data do falecimento
  birthPlace: String, // local de nascimento
  profession: String, // profissão antes da presidência
  mandates: [mandateSchema], // lista de mandatos (array de mandatos)
  biography: String, // resumo biográfico
  imageUrl: String, // foto oficial
  curiosities: String, // curiosidades
});

const President = mongoose.model("President", presidentSchema);

export default President;