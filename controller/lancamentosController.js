const asyncHandler = require("express-async-handler");
const Lancamentos = require("../models/lancamento");
const validateLancamentoInput = require("../validation/lancamento");

// DESC     Busca todos os lancamentos
// GET      api/lancamentos/
// access   Private
const getLancamentos = asyncHandler(async (req, res) => {
  const { igrejaFilha } = req.user;
  const lancamentos = await Lancamentos.find({ igrejaFilha });

  if (lancamentos.length === 0 || !lancamentos) {
    return res
      .status(400)
      .json({ message: "Não existe nenhum lançamento feito" });
  }
  return res.status(200).json(lancamentos);
});

// DESC     Realiza lancamentos
// POST     api/lancamentos/
// access   Private
const setLancamentos = asyncHandler(async (req, res) => {
  const { errors, isValid } = validateLancamentoInput(req.body);
  const { igrejaFilha, id } = req.user;
  const {
    pregador,
    culto,
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
    financasDizimosCash,
    financasDizimosTransferencia,
    financasOfertas,
    financasTotal,
    pregadorAmor,
    pregadorFinancas,
    observacao,
  } = req.body;

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newLancamento = await Lancamentos.create({
    usuario: id,
    igrejaFilha,
    culto,
    pregador,
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
        cash: financasDizimosCash,
        transferencia: financasDizimosTransferencia,
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
    return res.status(200).json(newLancamento);
  } else {
    errors.erroLancamento =
      "Houve um erro ao realizar este lançamento, verifique se os campos foram preenchidos correctamente";
    return res.status(400).json(errors);
  }
});

// DESC     Eliminar um lançamento
// DELETE   api/lancamentos/:id
// access   Private
const deleteLancamentos = asyncHandler(async (req, res) => {
  const lancamentoId = req.params.id;

  try {
    await Lancamentos.findByIdAndRemove(lancamentoId);
    res.status(200).json({ message: "O lancamento foi removido com sucesso" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Houve um problema ao remover este lançamento" });
  }
});

module.exports = {
  setLancamentos,
  deleteLancamentos,
  getLancamentos,
};
