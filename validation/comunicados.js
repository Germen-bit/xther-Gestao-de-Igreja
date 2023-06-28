const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateComunicadosInput(data) {
  let errors = {};
  data.titulo = !isEmpty(data.titulo) ? data.titulo : "";
  data.corpo = !isEmpty(data.corpo) ? data.corpo : "";
  data.data = !isEmpty(data.data) ? data.data : "";

  if (!Validator.isLength(data.titulo, { max: 100 })) {
    errors.titulo = "O titulo deve ter no maximo 150 caractéres";
  }
  if (Validator.isEmpty(data.titulo)) {
    errors.titulo = "O campo titulo é obrigatório";
  }
  if (Validator.isEmpty(data.corpo)) {
    errors.corpo = "O campo corpo é obrigatório";
  }
  if (Validator.isEmpty(data.data)) {
    errors.data = "O campo data é obrigatório";
  }


  return {
    errors,
    isValid: isEmpty(errors),
  };
};
