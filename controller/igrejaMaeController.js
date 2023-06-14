const asyncHandler = require("express-async-handler");
const IgrejaMae = require("../models/igrejaMaeModel");

// DESC     Buscar igreja mãe
// GET      api/igreja-mae/
// access   Private
const getIgrejaMae = asyncHandler(async (req, res) => {
  try {
    const igreja = await IgrejaMae.find();
    return res.status(200).json(igreja);
  } catch (error) {
    return res.status(404).json({ message: "Nenhuma igreja mãe criada" });
  }
});

const setIgrejaMae = asyncHandler(async(req, res) => {
  const {denominacao, email, telefone} = req.body

  if (!denominacao || !email || !telefone) {
    return res.status(400).json({ message: "Preenche os campos obrigatorios"})
  }

  try {
    const newIgrejaMae = await IgrejaMae.create({
      denominacao,
      email,
      telefone
    })

    return res.status(200).json(newIgrejaMae)
  } catch (error) {
    return res.status(400).json(error)
  }
})

module.exports = {
  getIgrejaMae,
  setIgrejaMae
};
