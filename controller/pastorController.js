const asyncHandler = require('express-async-handler')
const Pastor = require('../models/pastorModel')
const validatePastoresInput = require('../validation/pastores')

// DESC     Procura todos os pastores da igreja
// GET      api/pastores/
// access   Public
const getPastor = asyncHandler(async (req, res) => { 
    const pastor = await Pastor.find()
    if(!pastor) {
        return res.status(400).json({ message: "Nenhum há pastor cadastrado na sua igreja" })
    }
    return res.status(200).json(pastor)
})

// DESC     Procura um pastor pelo seu nome
// GET      api/pastores/:nome
// access   Public  
const getPastorByName = asyncHandler(async (req, res) => {
    const pastorName = req.params.nome
    const pastor = await Pastor.findOne({ "name": {$regex: pastorName, $options: 'i'} })
    
    if (!pastor) {
        return res.status(404).json({ message: "Pastor não encontrado ou não existe" })
    }
    return res.status(200).json(pastor)
})

// DESC     Adicionar pastor
// POST     api/pastores/
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

    if (!newUser) {
        errors.addPastor = "Houve algum erro ao adicionar este pastor"
        return res.status(400).json(errors)
    }
    return res.status(200).json(newUser)
})

// DESC     Atualiza informações sobre os pastores
// PUT      api/pastores/:id
// access   Private
const updatePastor = asyncHandler(async (req, res) => {
    const { errors, isValid } = validatePastoresInput(req.body)
    const pastorId = req.params.id

    if (!isValid) {
        return res.status(400).json(errors)
    }

    const pastorUpdate = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        tel1: req.body.tel1,
        tel2: req.body.tel2,
        email: req.body.email,
        morada: req.body.morada,
        provincia: req.body.provincia,
        municipio: req.body.municipio,
        pais: req.body.pais,
        funcao: req.body.funcao
    }

    await Pastor.findByIdAndUpdate(pastorId, pastorUpdate)
    res.status(200).json({ message:"Pastor atualizado com sucesso"})
})

// DESC     Apaga um pastor da base de dados da igreja 
// DELETE   api/pastores/:id
// access   Private
const deletePastor = asyncHandler(async (req, res) => {
    const pastorId = req.params.id
    const result = await Pastor.findByIdAndRemove(pastorId)
    if (!result) {
        return res.status(400).json({ message: "Houve algum erro ao apagar os dados desse pastor"}) 
    }
    return res.status(200).json({ message: "Dados apagado com sucesso"})
})

module.exports = {
    getPastor,
    getPastorByName,
    setPastor,
    updatePastor,
    deletePastor
}