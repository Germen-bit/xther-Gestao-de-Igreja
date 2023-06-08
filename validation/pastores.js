const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validatePastoresInput(data) {
    let errors = {}

    data.nome = !isEmpty(data.nome) ? data.nome : ''
    data.sobrenome = !isEmpty(data.sobrenome) ? data.sobrenome : ''
    data.tel1 = !isEmpty(data.tel1) ? data.tel1 : ''
    data.email = !isEmpty(data.email) ? data.email : ''
    data.funcao = !isEmpty(data.funcao) ? data.funcao : ''

    if (!Validator.isLength(data.nome, { min: 4, max: 30})) {
        errors.nome = "Nome deve ter entre 4 a 30 caracteres"
    }
    if (Validator.isEmpty(data.nome)) {
        errors.nome = "Campo nome é obrigatorio"
    }
    if (!Validator.isLength(data.sobrenome, { min: 4, max: 30})) {
        errors.sobrenome = "Sobrenome deve ter entre 4 a 30 caracteres"
    }
    if (Validator.isEmpty(data.sobrenome)) {
        errors.sobrenome = "Campo sobrenome é obrigatorio"
    }
    if ((!Validator.isLength(data.tel1, {min: 8, max: 15 })) || (!Validator.isInt(data.tel1))) {
        errors.tel1 = "O telefone deve ter entre 8 a 15 digitos numéricos"
    }
    if (Validator.isEmpty(data.tel1)) {
        errors.tel1 = "Campo telefone 1 é obrigatorio"
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = "Este email não é valido"
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = "Campo email é obrigatorio"
    }
    if (Validator.isEmpty(data.funcao)) {
        errors.funcao = "Campo função é obrigatorio"
    } 

    return {
        errors,
        isValid: isEmpty(errors)
    }
}