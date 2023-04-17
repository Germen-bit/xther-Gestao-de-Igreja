const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telefone: {
        type: Number,
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Usuario', usuarioSchema)