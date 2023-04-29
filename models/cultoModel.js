const mongoose = require("mongoose");

const cultoSchema = mongoose.Schema({
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
