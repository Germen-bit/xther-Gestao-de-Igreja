const asyncHandler = require('express-async-handler')
const Tarefas = require('../models/tarefasModel')

// DESC     Busca todas as tarefas de um usuario
// GET      api/tarefas/
// access   Private
const getTarefas = asyncHandler(async (req, res) =>{
    const tarefas = await Tarefas.find({ usuario: req.user.id })

    if (!tarefas || tarefas.length === 0) {
        res.status(400)
        throw new Error("Não há nenhuma tarefa criada")
    }

    res.status(200).json(tarefas)
})

// DESC     Criar novas tarefas
// POST      api/tarefas/
// access   Private
const setTarefas = asyncHandler(async (req, res) =>{
    const { titulo, fim } = req.body
    if (!titulo || !fim) {
        res.status(400)
        throw new Error('Preencha os campos obrigatório')
    }

    const newTarefa = await Tarefas.create({
        titulo,
        fim,
        usuario: req.user.id
    })

    res.status(200).json(newTarefa)
})
// DESC     Atualizar tarefas
// PUT      api/tarefas/:id
// access   Private
const updateTarefas = asyncHandler(async (req, res) =>{
    const tarefaId = req.params.id
    const { titulo, fim, observacao } = req.body
    const updatedTarefa = {
        titulo,
        fim,
        observacao
    }

    try {
        await Tarefas.findByIdAndUpdate(tarefaId, updatedTarefa)
        res.status(200).json({ message: "Tarefa modificada"})
    } catch (error) {
        res.status(400)
        throw new Error("Houve um problema ao modificar esta tarefa")
    }
})
// DESC     Eliminar uma tarefa
// DELETE   api/tarefas/:id
// access   Private
const deleteTarefas = asyncHandler(async (req, res) =>{
    const tarefaId = req.params.id

    try {
        await Tarefas.findByIdAndRemove(tarefaId)
        res.status(200).json({ message: "Tarefa removida"})
    } catch (error) {
        res.status(400)
        throw new Error("Erro ao remover esta tarefa")
    }
})

module.exports = {
    getTarefas,
    setTarefas,
    updateTarefas,
    deleteTarefas
}

