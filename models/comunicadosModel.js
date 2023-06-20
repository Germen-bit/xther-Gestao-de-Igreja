const mongoose = require('mongoose')

const comunicadosModel = mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuarios',
        required: true
    },
    igrejaFilha: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'IgrejaFilha',
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    corpo: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('Comunicados', comunicadosModel)