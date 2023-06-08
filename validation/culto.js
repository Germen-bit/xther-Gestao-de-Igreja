const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateCultoInput(data) {
    let errors = {}
    
    data.nomeLider = !isEmpty(data.nomeLider) ? data.nomeLider : ''
    data.data = !isEmpty(data.data) ? data.data : ''
    data.nomeCulto = !isEmpty(data.nomeCulto) ? data.nomeCulto : ''
    data.adultos = !isEmpty(data.adultos) ? data.adultos.toString() : ''
    data.convertidos = !isEmpty(data.convertidos) ? data.convertidos.toString() : ''
    data.criancas = !isEmpty(data.criancas) ? data.criancas.toString() : ''
    data.financas = !isEmpty(data.financas) ? data.financas.toString() : ''
    // data.integrantes = !isEmpty(data.integrantes) ? data.integrantes : ''
    
    if (Validator.isEmpty(data.nomeLider)) {
        errors.nomeLider = "Campo lider da reunião é obrigatorio"
    }
    if (Validator.isEmpty(data.data)) {
        errors.data = "Campo data é obrigatorio"
    }
    if (Validator.isEmpty(data.adultos)) {
        errors.adultos = "Campo adultos é obrigatorio"
    }
    if (Validator.isEmpty(data.convertidos)) {
        errors.convertidos = "Campo convertidos é obrigatorio"
    }
    if (Validator.isEmpty(data.criancas)) {
        errors.criancas = "Campo crianças é obrigatorio"
    }
    if (Validator.isEmpty(data.financas)) {
        errors.financas = "Campo finanças é obrigatorio"
    }
    if (Validator.isEmpty(data.nomeCulto)) {
        errors.nomeCulto = "Campo nome do culto é obrigatorio"
    }
    // if (Validator.isEmpty(data.integrantes)) {
    //     errors.integrantes = "Campo integrantes é obrigatorio"
    // }
    

    return {
        errors,
        isValid: isEmpty(errors)
    }
}