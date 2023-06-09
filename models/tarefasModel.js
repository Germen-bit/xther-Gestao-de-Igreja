const mongoose = require('mongoose')

const tarefasSchema = mongoose.Schema({
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Usuario'
    },
    igrejaFilha: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'IgrejaFilha'
    },
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
    },
    fim: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Tarefas', tarefasSchema)