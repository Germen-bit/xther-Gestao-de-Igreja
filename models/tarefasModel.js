const mongoose = require('mongoose')

const tarefasSchema = mongoose.Schema({
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Usuario'
    },
    titulo: {
        type: String,
        required: [true, 'O titulo é obrigatorio em cada tarefa']
    },
    observacao: {
        type: String,
    },
    inicio: {
        type: Date,
        default: Date.now()
    },
    fim: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Tarefas', tarefasSchema)