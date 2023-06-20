const express = require("express");
const asyncHandler = require("express-async-handler");
const Comunicados = require("../models/comunicadosModel");
const validateComunicadosInput = require("../validation/comunicados");
const dayjs = require("dayjs");
const weekOfYear = require("dayjs/plugin/weekOfYear");
dayjs.extend(weekOfYear);

// Desc     Rota para pegar as comunicados de uma semana
// GET      /api/comunicados/igreja-filha/:id
// access   Private
const getComunicadosSemanal = asyncHandler(async (req, res) => {
  const igrejaID = req.params.id;

  let result = await Comunicados.find({ igrejaFilha: igrejaID });
  result = await result.filter((value) => {
    return dayjs(value.data).week() === dayjs(new Date()).week();
  });
  if (!result || result.length === 0) {
    return res.status(404).json({ error: "Nenhum comunicado encontrado" });
  } else {
    return res.status(200).json(result);
  }
});

// Desc     Rota para criar novos comunicados
// POST     /api/comunicados/igreja-filha/:id
// access   Private
const setComunicado = asyncHandler(async (req, res) => {
  const { errors, isValid } = validateComunicadosInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { titulo, corpo, data } = req.body;
  const { id } = req.user;
  const igrejaID = req.params.id;
  const newComunicado = await Comunicados.create({
    usuario: id,
    igrejaFilha: igrejaID,
    titulo,
    corpo,
    data,
  });

  if (newComunicado) {
    return res.status(200).json({ message: "Comunicado adicionado" });
  } else {
    errors.error = "houve um erro";
    return res.status(400).json(errors);
  }
});

// Desc     Rota para atualizar os comunicados
// PUT      /api/comunicados/igreja-filha/
// access   Private
const updateComunicados = asyncHandler(async (req, res) => {
  const { errors, isValid } = validateComunicadosInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { titulo, corpo } = req.body
  const { id } = req.user;
  const comunicadoUpdated = await Comunicados.findByIdAndUpdate(id, { titulo, corpo })
  if (comunicadoUpdated) {
    return res.status(200).json({ message: "Comunicados atualizado" })
  } else {
    errors.error = "Houve algum erro ao atualizar"
    return res.status(400).json(errors)
  }
});

module.exports = {
  getComunicadosSemanal,
  setComunicado,
  updateComunicados
};
