const mongoose = require('mongoose')

const igrejaSchema = mongoose.Schema({
    igrejaMae: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'IgrejaMae'
    },
    denominacao: {
        type: String,
        required: true
    },
    handle: {
        type: String,
        required: true
    },
    criadaEm: {
        type: Date,
        default: new Date()
    },
    validade: {
        type: Date,
        required: true
    },
    morada: {
        type: String,
    },
    telefone: {
        type: Number
    }
})

module.exports = mongoose.model('IgrejaFilha', igrejaSchema)