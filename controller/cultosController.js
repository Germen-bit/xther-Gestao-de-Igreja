const asyncHandler = require("express-async-handler");
const Cultos = require("../models/cultoModel");
const validateCultoInput = require("../validation/culto");

// DESC     Buscar todos os cultos
// GET      api/cultos/
// access   Private
const getCultos = asyncHandler(async (req, res) => {
  const cultos = await Cultos.find();

  if (!cultos || cultos.length === 0) {
    res.status(400).json(errors);
  } else {
    res.status(200).json(cultos);
  }
});

// DESC     Criar novos cultos
// POST     api/cultos/
// access   Private
const setCultos = asyncHandler(async (req, res) => {
  const { errors, isValid } = validateCultoInput(req.body);
  const {
    nomeLider,
    data,
    nomeCulto,
    adultos,
    convertidos,
    criancas,
    financas,
    integrantes,
  } = req.body;

  if (!isValid) {
    return res.status(400).json(errors);
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
    res.status(400).json(errors);
  } else {
    res.status(200).json(newCulto);
  }
});

// DESC     Buscar todos os cultos
// PUT      api/cultos/:id
// access   Private
const updateCultos = asyncHandler(async (req, res) => {
  const cultoId = req.params.id;
  const { errors, isValid } = validateCultoInput(req.body)
  const {
    nomeLider,
    data,
    nomeCulto,
    convertidos,
    criancas,
    adultos,
    financas,
    integrantes,
  } = req.body;

  if (!isValid) {
    return res.status(400).json(errors)
  }

  const updatedCulto = {
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
  };

  try {
    await Cultos.findByIdAndUpdate(cultoId, updatedCulto, { new: true });
    res.status(200).json({ message: "Culto modificado" });
  } catch (error) {
    return res.status(400).json(errors);
  }
});

// DESC     Buscar todos os cultos
// DELETE   api/cultos/:id
// access   Private
const deleteCultos = asyncHandler(async (req, res) => {
  const cultoId = req.params.id;

  try {
    await Cultos.findByIdAndDelete(cultoId);
    res.status(200).json({ message: "Culto removido" });
  } catch (error) {
    return res.status(400).json(errors);
  }
});

module.exports = {
  getCultos,
  setCultos,
  updateCultos,
  deleteCultos,
};
