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
  coLider1: {
    type: String,
    required: true,
  },
  coLider2: {
    type: String,
  },
  nomeCulto: {
    type: String,
    required: true,
  },
  alvos: {
    presencas: { type: Number },
    convertidos: { type: Number },
    criancas: { type: Number },
    financas: { type: Number },
  },
});

module.exports = mongoose.model("Cultos", cultoSchema);
