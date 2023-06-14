const mongoose = require('mongoose')

const pastorSchema = mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Usuario'
    },
    igrejaFilha: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'IgrejaFilha'
    },
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    tel1: {
        type: Number,
        required: true
    },
    tel2: {
        type: Number,
    },
    email: {
        type: String,
        required: true
    },
    morada: {
        type: String,
    },
    provincia: {
        type: String,
    },
    municipio: {
        type: String,
    },
    funcao: {
        type: String,
        required: true
    },
    pais: {
        type: String
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Pastor', pastorSchema)