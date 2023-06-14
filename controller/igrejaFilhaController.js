const asyncHandler = require('express-async-handler')
const IgrejaFilha = require('../models/igrejaFilhaModel')
const randomString = require('randomstring')

// DESC     Buscar igrejas
// Get      api/igreja-filha/
// access   Public
const getIgreja = asyncHandler(async (req, res) => {
    const igreja = await IgrejaFilha.find()

    if (!igreja || igreja.length === 0) {
        return res.status(400).json({ message: "Nenhuma igreja existente"})
    } else {
        return res.status(200).json(igreja)
    }
})

// DESC     Buscar igrejas
// Get      api/igreja-filha/:handle
// access   Public
const getIgrejaByHandle = asyncHandler(async (req, res) => {
    const handle = req.params.handle
    const igreja = await IgrejaFilha.findOne({ handle })

    if (!igreja || igreja.length === 0) {
        return res.status(400).json({ message: "Nenhuma igreja existente"})
    } else {
        return res.status(200).json(igreja)
    }
})

// DESC     Criar igreja
// POST     api/igreja-filha/
// access   Public
const setIgreja = asyncHandler(async (req, res) => {
    const { denominacao, validade, morada, telefone, igrejaMae } = req.body

    const handle = randomString.generate({
        length: 9,
        charset: ['numeric','alphabetic']
    })
    const newIgreja = await IgrejaFilha.create({
        denominacao,
        handle,
        validade, 
        morada,
        telefone,
        igrejaMae
    })

    if (!newIgreja) {
        return res.status(400).json({ message: 'Houve um erro ao criar a igreja'})
    } else {
        return res.status(200).json(newIgreja)
    }
})

module.exports = {
    getIgreja,
    setIgreja,
    getIgrejaByHandle
}