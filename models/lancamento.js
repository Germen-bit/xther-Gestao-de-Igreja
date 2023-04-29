const mongoose = require("mongoose");

const lancamentoSchema = mongoose.Schema({
  culto: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Cultos'
  },
  pregador: {
    type: String,
    required: true
  },
  nomeCulto: {
    type: String,
    required: true,
  }, 
  semana: {
    type: Number,
    required: true,
  },
  data: {
    type: Date,
    required: true,
  },
  palavra: {
    type: String,
    required: true,
  },
  presencas: {
    adulto: {
      alvo: { type: Number, required: true },
      real: { type: Number, required: true },
    },
    criancas: {
      alvo: { type: Number, required: true },
      real: { type: Number, required: true },
    },
    convertidos: {
      alvo: { type: Number, required: true },
      real: { type: Number, required: true },
    },
  },
  financas: {
    alvoFinancas: { type: Number },
    dizimos: { cash: { type: Number }, transferencia: { type: Number } },
    ofertas: { type: Number },
    total: { type: Number },
  },
  pregadorAssistente: {
    pregadorAmor: { type: String },
    pregadorFinancas: { type: String },
  },
  observacao: { type: String },
});

module.exports = mongoose.model("Lancamento", lancamentoSchema);
