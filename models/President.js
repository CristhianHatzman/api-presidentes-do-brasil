import mongoose from "mongoose";

const mandateSchema = new mongoose.Schema({
  startDate: { type: Date, required: true }, // início do mandato
  endDate: { type: Date, required: true }, // fim do mandato
  vicePresident: { type: String }, // vice-presidente
  party: { type: String, required: true }, // partido no período
  achievements: [String], // principais realizações
});

const presidentSchema = new mongoose.Schema({
  name: { type: String, required: true }, // nome completo
  birthDate: { type: Date, required: true }, // data de nascimento
  deathDate: { type: Date }, // data do falecimento
  birthPlace: { type: String, required: true }, // local de nascimento
  profession: { type: String }, // profissão antes da presidência
  mandates: [mandateSchema], // lista de mandatos
  biography: { type: String }, // resumo biográfico
  imageUrl: { type: String }, // foto oficial
  curiosities: [String], // curiosidades
});

const President = mongoose.model("President", presidentSchema);

export default President;
