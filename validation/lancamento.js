const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLancamentoInput(data) {
  let errors = {};

    data.pregador = !isEmpty(data.pregador) ? data.pregador : ''
    data.nomeCulto = !isEmpty(data.nomeCulto) ? data.nomeCulto : ''
    data.data = !isEmpty(data.data) ? data.data : ''
    data.palavra = !isEmpty(data.palavra) ? data.palavra : ''
    data.adultoReal = !isEmpty(data.adultoReal) ? data.adultoReal : ''
    data.criancasReal = !isEmpty(data.criancasReal) ? data.criancasReal : ''
    data.convertidosReal = !isEmpty(data.convertidosReal) ? data.convertidosReal : ''
    data.financasDizimosCash = !isEmpty(data.financasDizimosCash) ? data.financasDizimosCash : ''
    data.financasDizimosTransferencia = !isEmpty(data.financasDizimosTransferencia) ? data.financasDizimosTransferencia : ''
    data.financasOfertas = !isEmpty(data.financasOfertas) ? data.financasOfertas : ''
    data.pregadorAmor = !isEmpty(data.pregadorAmor) ? data.pregadorAmor : ''
    data.pregadorFinancas = !isEmpty(data.pregadorFinancas) ? data.pregadorFinancas : ''
    data.observacao = !isEmpty(data.observacao) ? data.observacao : ''

    if(Validator.isEmpty(data.pregador)) {
        errors.pregador = "Campo pregador é obrigatorio"
    }    
    if(Validator.isEmpty(data.nomeCulto)) {
        errors.nomeCulto = "Campo nome do culto é obrigatorio"
    }    
    if(Validator.isEmpty(data.data)) {
        errors.data = "Campo data é obrigatorio"
    }    
    if(Validator.isEmpty(data.palavra)) {
        errors.palavra = "Campo palavra é obrigatorio"
    }    
    if(Validator.isEmpty(data.adultoReal)) {
        errors.adultoReal = "Campo adulto real é obrigatorio"
    }    
    if(Validator.isEmpty(data.criancasReal)) {
        errors.criancasReal = "Campo crianca real é obrigatorio"
    }    
    if(Validator.isEmpty(data.convertidosReal)) {
        errors.convertidosReal = "Campo convertido real é obrigatorio"
    }    
    if(Validator.isEmpty(data.financasDizimosCash.toString())) {
        errors.financasDizimosCash = "Campo cash é obrigatorio"
    }    
    if(Validator.isEmpty(data.financasDizimosTransferencia.toString())) {
        errors.financasDizimosTransferencia = "Campo transferências é obrigatorio"
    }    
    if(Validator.isEmpty(data.financasOfertas.toString())) {
        errors.financasOfertas = "Campo ofertas é obrigatorio"
    }        
    if(Validator.isEmpty(data.pregadorAmor)) {
        errors.pregadorAmor = "Campo pregador do amor é obrigatorio"
    }    
    if(Validator.isEmpty(data.pregadorFinancas)) {
        errors.pregadorFinancas = "Campo pregador de financas é obrigatorio"
    }    

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
