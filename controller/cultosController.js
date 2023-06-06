const asyncHandler = require("express-async-handler");
const Cultos = require("../models/cultoModel");

// DESC     Buscar todos os cultos
// GET      api/cultos/
// access   Private
const getCultos = asyncHandler(async (req, res) => {
  const cultos = await Cultos.find();

  if (!cultos || cultos.length === 0) {
    res.status(400);
    throw new Error("Nenhum culto ou reunião encontrada");
  } else {
    res.status(200).json(cultos);
  }
});

// DESC     Criar novos cultos
// POST     api/cultos/
// access   Private
const setCultos = asyncHandler(async (req, res) => {
  const {
    nomeLider,
    data,
    nomeCulto,
    adultos,
    convertidos,
    criancas,
    financas,
    integrantes
  } = req.body;

  if (!req.body) {
    res.status(400);
    throw new Error("Preencha os campos obrigatorios");
  }

  const newCulto = await Cultos.create({
    nomeCulto,
    nomeLider,
    data,
    integrantes,
    alvos: {
      adultos,
      convertidos,
      criancas,
      financas,
    },
  });

  if (!newCulto) {
    res.status(400);
    throw new Error("Verifique os campos preenchidos, parece que há um erro");
  } else {
    res.status(200).json(newCulto);
  }
});

// DESC     Buscar todos os cultos
// PUT      api/cultos/:id
// access   Private
const updateCultos = asyncHandler(async (req, res) => {
  const cultoId = req.params.id;
  
    const {
    nomeLider,
    data,
    nomeCulto,
    presencas,
    convertidos,
    criancas,
    financas,
    integrantes
  } = req.body;

  const updatedCulto = {
    nomeCulto,
    nomeLider,
    data,
    integrantes,
    alvos: {
        presencas,
        convertidos,
        criancas,
        financas
    }
  }

  try {
    await Cultos.findByIdAndUpdate(cultoId, updatedCulto, {new: true})
    res.status(200).json({ message: "Culto modificado"})
  } catch (error) {
    res.status(400)
    throw new Error("Houve algum problema ao modificar os dados")
  }
});

// DESC     Buscar todos os cultos
// DELETE   api/cultos/:id
// access   Private
const deleteCultos = asyncHandler(async (req, res) => {
  const cultoId = req.params.id

  try {
    await Cultos.findByIdAndDelete(cultoId)
    res.status(200).json({ message: "Culto removido" })
  } catch (error) {
    res.status(400)
    throw new Error("Houve algum problema ao remover o culto")
  }
});

module.exports = {
  getCultos,
  setCultos,
  updateCultos,
  deleteCultos,
};
