const asyncHandler = require("express-async-handler");
const Lancamentos = require("../models/lancamento");
const lancamento = require("../models/lancamento");
 
// DESC     Busca todos os lancamentos
// GET      api/lancamentos/
// access   Private
const getLancamentos = asyncHandler(async(req, res) => {
    const lancamentos = await Lancamentos.find()

    if (lancamentos.length === 0 || !lancamentos) {
        res.status(400)
        throw new Error("Nenhum lançamento encontrado")
    }
    res.status(200).json(lancamentos)
})

// DESC     Realiza lancamentos
// POST   api/lancamentos/
// access   Private
const setLancamentos = asyncHandler(async (req, res) => {
  const {
    nomeCulto,
    semana,
    data,
    palavra,
    adultoAlvo,
    adultoReal,
    criancasAlvo,
    criancasReal,
    convertidosAlvo,
    convertidosReal,
    financasAlvo,
    financasDizimosAlvo,
    financasDizimosReal,
    financasOfertas,
    financasTotal,
    pregadorAmor,
    pregadorFinancas,
    observacao,
  } = req.body;

  if (!req.body) {
    res.status(400);
    throw new Error("Preencha todos os campos obrigatorios");
  }

  const newLancamento = await Lancamentos.create({
    nomeCulto,
    semana,
    data,
    palavra,
    observacao,
    pregadorAssistente: {
      pregadorAmor,
      pregadorFinancas,
    },
    financas: {
      alvoFinancas: financasAlvo,
      dizimos: {
        alvo: financasDizimosAlvo,
        real: financasDizimosReal
      },
      ofertas: financasOfertas,
      total: financasTotal,
    },
    presencas: {
      adulto: {
        alvo: adultoAlvo,
        real: adultoReal,
      },
      criancas: {
        alvo: criancasAlvo,
        real: criancasReal,
      },
      convertidos: {
        alvo: convertidosAlvo,
        real: convertidosReal,
      },
    },
  });

  if (newLancamento) {
    res.status(200).json(newLancamento);
  } else {
    res.status(400);
    throw new Error("Houve um problema ao realizar o lançamento");
  }
});

// DESC     Realiza lancamentos
// DELETE   api/lancamentos/:id
// access   Private
const deleteLancamentos = asyncHandler(async (req, res) => {
  const lancamentoId = req.params.id;

  try {
    await Lancamentos.findByIdAndRemove(lancamentoId);
    res.status(200).json({ message: "O lancamento foi removido com sucesso" });
  } catch (error) {
    res.status(400);
    throw new Error("Houve um problema ao remover este lançamento");
  }
});

module.exports = {
  setLancamentos,
  deleteLancamentos,
  getLancamentos
};
