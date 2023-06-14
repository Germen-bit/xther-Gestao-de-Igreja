const mongoose = require("mongoose");

const cultoSchema = mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Usuario'
  },
  igrejaFilha: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'IgrejaFilha'
  },
  nomeLider: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    required: true,
  },
  integrantes: {
    type: Array,
  },
  nomeCulto: {
    type: String,
    required: true,
  },
  alvos: {
    adultos: { type: Number },
    convertidos: { type: Number },
    criancas: { type: Number },
    financas: { type: Number },
  },
});

module.exports = mongoose.model("Cultos", cultoSchema);
