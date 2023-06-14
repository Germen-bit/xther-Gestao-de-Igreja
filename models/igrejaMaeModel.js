const mongoose = require("mongoose");

const igrejaMae = mongoose.Schema({
  denominacao: {
    type: String,
    required: true,
  },
  criadaEm: {
    type: Date,
    required: true,
    default: new Date(),
  },
  igrejasFilhas: {
    type: Array,
  },
  email: {
    type: String,
    required: true,
  },
  telefone: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("igrejaMae", igrejaMae);
