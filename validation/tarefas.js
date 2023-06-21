const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateTarefasInput(data) {
    let errors = {}

    data.titulo = !isEmpty(data.titulo) ? data.titulo : ''
    data.fim = !isEmpty(data.fim) ? data.fim : ''


    if (Validator.isEmpty(data.titulo)) {
        errors.titulo = "Campo titulo é obrigatorio"
    }
    if (Validator.isEmpty(data.fim)) {
        errors.fim = "Campo data é obrigatorio"
    }else if (!Validator.isAfter(data.fim, Date().toString())) {
        errors.fim = "Está data já não é valida"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}