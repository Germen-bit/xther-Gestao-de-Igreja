const asyncHandler = require("express-async-handler");
const Pastor = require("../models/pastorModel");
const validatePastoresInput = require("../validation/pastores");

// DESC     Procura todos os pastores da igreja
// GET      api/pastores/ 
// access   Private
const getPastor = asyncHandler(async (req, res) => {
  const igrejaID = req.params.id;
  const pastor = await Pastor.find({ igrejaFilha: igrejaID });
  if (!pastor) {
    return res
      .status(400)
      .json({ message: "Nenhum há pastor cadastrado na sua igreja" });
  }
  return res.status(200).json(pastor);
});

// DESC     Procura um pastor pelo seu nome
// GET      api/pastores/igreja-filha/:id/:nome
// access   Private
const getPastorByName = asyncHandler(async (req, res) => {
  const pastorName = req.params.nome;
  const { igrejaFilha } = req.user
  const pastor = await Pastor.findOne({
    igrejaFilha
  });

  if (!pastor) {
    return res
      .status(404)
      .json({ message: "Pastor não encontrado ou não existe" });
  }
  return res.status(200).json(pastor);
});

// DESC     Adicionar pastor
// POST     api/pastores/igreja-filha/:id
// access   Private
const setPastor = asyncHandler(async (req, res) => {
  const { errors, isValid } = validatePastoresInput(req.body);
  const {
    nome,
    sobrenome,
    tel1,
    tel2,
    email,
    morada,
    provincia,
    municipio,
    pais,
    funcao,
  } = req.body;
  const { id } = req.user;
  const igrejaID = req.params.id

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newUser = await Pastor.create({
    usuario: id,
    igrejaFilha: igrejaID,
    nome,
    sobrenome,
    tel1,
    tel2,
    email,
    morada,
    provincia,
    municipio,
    funcao,
    pais,
  });

  if (!newUser) {
    errors.addPastor = "Houve algum erro ao adicionar este pastor";
    return res.status(400).json(errors);
  }
  return res.status(200).json(newUser);
});

// DESC     Atualiza informações sobre os pastores
// PUT      api/pastores/:id
// access   Private
const updatePastor = asyncHandler(async (req, res) => {
  const { errors, isValid } = validatePastoresInput(req.body);
  const pastorId = req.params.id;
  const {
    nome,
    sobrenome,
    tel1,
    tel2,
    email,
    morada,
    provincia,
    municipio,
    pais,
    funcao,
  } = req.body;

  if (!isValid) {
    return res.status(400).json(errors);
  }
  console.log(id);
  const pastorUpdate = {
    nome,
    sobrenome,
    tel1,
    tel2,
    email,
    morada,
    provincia,
    municipio,
    pais,
    funcao,
  };

  await Pastor.findByIdAndUpdate(pastorId, pastorUpdate);
  res.status(200).json({ message: "Pastor atualizado com sucesso" });
});

// DESC     Apaga um pastor da base de dados da igreja
// DELETE   api/pastores/:id
// access   Private
const deletePastor = asyncHandler(async (req, res) => {
  const pastorId = req.params.id;
  const result = await Pastor.findByIdAndRemove(pastorId);
  if (!result) {
    return res
      .status(400)
      .json({ message: "Houve algum erro ao apagar os dados desse pastor" });
  }
  return res.status(200).json({ message: "Dados apagado com sucesso" });
});

module.exports = {
  getPastor,
  getPastorByName,
  setPastor,
  updatePastor,
  deletePastor,
};
