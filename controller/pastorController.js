const asyncHandler = require('express-async-handler')
const Pastor = require('../models/pastorModel')

// DESC     Procura todos os pastores da igreja
// DELETE   api/cultos/:id
// access   Private
const getPastor = asyncHandler(async (req, res) => { 
    const pastor = await Pastor.find()
    if(!pastor) {
        res.status(400)
        throw new Error("Nenhum pastor cadastrado na sua igreja")
    }
    res.status(200).json(pastor)
})

//  DESC Procura um pastor pelo seu nome  
const getPastorByName = asyncHandler(async (req, res) => {
    const pastorName = req.params.name
    const pastor = await Pastor.findOne({ "name": {$regex: pastorName, $options: 'i'} })
    
    if (!pastor) {
        res.status(404)
        throw new Error("Pastor não encontrado ou não existe")
    }

    res.status(200).json(pastor)
})

//  DESC    Adicionar pastor
const setPastor = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error("Por favor preencha os campo vazio")
    }

    const newUser = await Pastor.create({
        name: req.body.name,
        tel1: req.body.tel1,
        tel2: req.body.tel2,
        email: req.body.email,
        morada: req.body.morada,
        provincia: req.body.provincia,
        municipio: req.body.municipio
    })

    res.status(200).json(newUser)
})

//  DESC    Atualiza informações sobre os pastores
const updatePastor = asyncHandler(async (req, res) => {
    const pastorId = req.params.id
    const pastorUpdate = {
        name: req.body.name,
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

//  DESC    Apaga um pastor da base de dados da igreja 
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