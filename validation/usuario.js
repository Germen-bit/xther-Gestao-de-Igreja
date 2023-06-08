const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateUsuarioInput(data) {
    let errors = {}

    data.nome = !isEmpty(data.nome) ? data.nome : ''
    data.sobrenome = !isEmpty(data.sobrenome) ? data.sobrenome : ''
    data.email = !isEmpty(data.email) ? data.email : ''
    data.telefone = !isEmpty(data.telefone) ? data.telefone : ''
    data.password = !isEmpty(data.password) ? data.password : ''
    data.confirmarPassword = !isEmpty(data.confirmarPassword) ? data.confirmarPassword : ''

    if (!Validator.isLength(data.nome, { min: 4, max: 30 })) {
        errors.nome = "Nome deve ter entre 4 a 30 caracteres"
    }
    if (Validator.isEmpty(data.nome)) {
        errors.nome = "Campo nome é obrigatorio"
    }
    if (!Validator.isLength(data.sobrenome, { min: 4, max: 30 })) {
        errors.sobrenome = "Sobrenome deve ter entre 4 a 30 caracteres"
    }
    if (Validator.isEmpty(data.sobrenome)) {
        errors.sobrenome = "Campo sobrenome é obrigatorio"
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = "Este email não é valido"
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = "Campo email é obrigatorio"
    }
    if ((!Validator.isLength(data.telefone, {min: 8, max: 15 })) || (!Validator.isInt(data.telefone))) {
        errors.telefone = "O telefone deve ter entre 8 a 15 digitos numéricos"
    }
    if (Validator.isEmpty(data.telefone)) {
        errors.telefone = "Campo telefone é obrigatorio"
    }
    if (!Validator.isLength(data.password, { min: 8 })) {
        errors.password = "Password deve ter no mínimo 8 caracteres"
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = "Campo password é obrigatorio"
    }
    if (!Validator.equals(data.password,data.confirmarPassword)) {
        errors.confirmarPassword = "As password não podem ser diferentes"
    }
    if (Validator.isEmpty(data.confirmarPassword)) {
        errors.confirmarPassword = "Campo confirmar password é obrigatorio"
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}