const asyncHandler = require('express-async-handler')
const Tarefas = require('../models/tarefasModel')
const validateTarefasInput = require('../validation/tarefas')

// DESC     Busca todas as tarefas de um usuario
// GET      api/tarefas/
// access   Private
const getTarefas = asyncHandler(async (req, res) =>{
    const tarefas = await Tarefas.find({ usuario: req.user.id })

    if (!tarefas || tarefas.length === 0) {
        res.status(400)
    }

    res.status(200).json(tarefas)
})

// DESC     Criar novas tarefas
// POST     api/tarefas/
// access   Private
const setTarefas = asyncHandler(async (req, res) =>{
    const { errors, isValid } = validateTarefasInput(req.body)
    const { titulo, fim, descricao } = req.body
    if (!isValid) {
        return res.status(400).json(errors)
    }

    const newTarefa = await Tarefas.create({
        titulo,
        fim,
        usuario: req.user.id,
        descricao
    })

    res.status(200).json(newTarefa)
})
// DESC     Atualizar tarefas
// PUT      api/tarefas/:id
// access   Private
const updateTarefas = asyncHandler(async (req, res) =>{
    const {errors, isValid } = validateTarefasInput(req.body)

    if (!isValid) {
        return res.status(400).json(errors)
    }

    const tarefaId = req.params.id
    const { titulo, fim, descricao } = req.body
    const updatedTarefa = {
        titulo,
        fim,
        descricao
    }

    try {
        await Tarefas.findByIdAndUpdate(tarefaId, updatedTarefa)
        return res.status(200).json({ message: "Tarefa modificada"})
    } catch (error) {
        errors.errorTarefa = "Houve um problema ao modificar esta tarefa"
        return res.status(400).json(errors)
    }
})
// DESC     Eliminar uma tarefa
// DELETE   api/tarefas/:id
// access   Private
const deleteTarefas = asyncHandler(async (req, res) =>{
    const tarefaId = req.params.id

    try {
        await Tarefas.findByIdAndRemove(tarefaId)
        return res.status(200).json({ message: "Tarefa removida"})
    } catch (error) {
        return res.status(400).json({ message: "Houve algum problema ao remover esta tarefa" })
    }
})

module.exports = {
    getTarefas,
    setTarefas,
    updateTarefas,
    deleteTarefas
}

