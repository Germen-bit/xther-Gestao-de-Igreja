const asyncHandler = require('express-async-handler')
const Pastor = require('../models/pastorModel')
const validatePastoresInput = require('../validation/pastores')

// DESC     Procura todos os pastores da igreja
// GET      api/pastores/
// access   Public
const getPastor = asyncHandler(async (req, res) => { 
    const pastor = await Pastor.find()
    if(!pastor) {
        res.status(400)
        throw new Error("Nenhum pastor cadastrado na sua igreja")
    }
    res.status(200).json(pastor)
})

// DESC     Procura um pastor pelo seu nome
// GET      api/pastores/:nome
// access   Public  
const getPastorByName = asyncHandler(async (req, res) => {
    const pastorName = req.params.nome
    const pastor = await Pastor.findOne({ "name": {$regex: pastorName, $options: 'i'} })
    
    if (!pastor) {
        res.status(404)
        throw new Error("Pastor não encontrado ou não existe")
    }

    res.status(200).json(pastor)
})

// DESC     Adicionar pastor
// POST      api/pastores/
// access   Private
const setPastor = asyncHandler(async (req, res) => {
    const { errors, isValid } = validatePastoresInput(req.body)
    
    if (!isValid) {
        return res.status(400).json(errors)
    }

    const newUser = await Pastor.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        tel1: req.body.tel1,
        tel2: req.body.tel2,
        email: req.body.email,
        morada: req.body.morada,
        provincia: req.body.provincia,
        municipio: req.body.municipio,
        funcao: req.body.funcao,
        pais: req.body.pais
    })

    res.status(200).json(newUser)
})

// DESC     Atualiza informações sobre os pastores
// PUT      api/pastores/:id
// access   Private
const updatePastor = asyncHandler(async (req, res) => {
    const pastorId = req.params.id
    const pastorUpdate = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        tel1: req.body.tel1,
        tel2: req.body.tel2,
        email: req.body.email,
        morada: req.body.morada,
        provincia: req.body.provincia,
        municipio: req.body.municipio
    }

    await Pastor.findByIdAndUpdate(pastorId, pastorUpdate)
    res.status(200).json({ message:"Pastor atualizado com sucesso"})
})

// DESC    Apaga um pastor da base de dados da igreja 
// DELETE      api/pastores/:id
// access   Private
const deletePastor = asyncHandler(async (req, res) => {
    const pastorId = req.params.id
    await Pastor.findByIdAndRemove(pastorId)
    res.status(200).json({ message: "Dados apagado com sucesso"})
})

module.exports = {
    getPastor,
    getPastorByName,
    setPastor,
    updatePastor,
    deletePastor
}