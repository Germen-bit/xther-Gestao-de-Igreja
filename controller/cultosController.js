const asyncHandler = require("express-async-handler");
const Cultos = require("../models/cultoModel");
const validateCultoInput = require("../validation/culto");

// DESC     Buscar todos os cultos
// GET      api/cultos/
// access   Private
const getCultos = asyncHandler(async (req, res) => {
  const { errors, isValid } = validateCultoInput(req.body)
  const { igrejaFilha } = req.user
  const cultos = await Cultos.find({ igrejaFilha });

  if (!cultos || cultos.length === 0) {
    errors.cultos = "Nenhum culto encontrado"
    return res.status(400).json(errors);
  } else {
    return res.status(200).json(cultos);
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
  const { igrejaFilha, id } = req.user

  if (!isValid) {
    return res.status(400).json(errors);
  }


  const newCulto = await Cultos.create({
    usuario: id,
    igrejaFilha,
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
    errors.resultado = "Houve algum problema "
    return res.status(400).json(errors);
  } else {
    return res.status(200).json(newCulto);
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
    return res.status(200)
  } catch (error) {
    errors.atualizacao = "Houve um erro ao atualizar este culto, verifique os campos"
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
    res.status(200)
  } catch (error) {
    return res.status(400).json({ message: "Houve um erro ao eliminar este culto"});
  }
});

module.exports = {
  getCultos,
  setCultos,
  updateCultos,
  deleteCultos,
};
