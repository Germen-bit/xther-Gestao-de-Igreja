const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({
    igrejaFilha: { 
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'IgrejaFilha'
    },
    handle: {
        type: Array,
        required: true
    },
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
    },
    usuarioMaster: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Usuario', usuarioSchema)