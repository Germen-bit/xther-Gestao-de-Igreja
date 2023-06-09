const asyncHandler = require("express-async-handler");
const Usuario = require("../models/usuarioModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validateUsuarioInput = require("../validation/usuario");
const validateLoginInput = require("../validation/login");

// DESC     Procura usuarios
// GET      api/usuarios/
// access   Public
const getUsuario = asyncHandler(async (req, res) => {
  const usuarios = await Usuario.find();
  if (!usuarios || usuarios.length === 0) {
    return res.status(400).json({ message: "Nenhum usuarios encontrado" });
  }
  return res.status(200).json(usuarios);
});

// DESC     login de usuarios
// POST     api/usuarios/login
// access   Public
const loginUsuario = asyncHandler(async (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { email, password } = req.body;
  const usuario = await Usuario.findOne({ email: email });
  if (!usuario) {
    errors.email = "Este usuario não existe";
    return res.status(400).json(errors);
  }
  if (usuario && (await bcrypt.compare(password, usuario.password))) {
    res.status(201).json({
      _id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      token: generateToken(usuario._id),
    });
  } else {
    errors.password = "Password incorrecta";
    return res.status(400).json(errors);
  }
});

// DESC     cadastra usuarios
// POST     api/usuarios/
// access   Public
const setUsuario = asyncHandler(async (req, res) => {
  const { errors, isValid } = validateUsuarioInput(req.body);
  const { nome, sobrenome, email, telefone, password } = req.body;

  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Verificar se o email ja existe na base de dados
  if (await Usuario.findOne({ email })) {
    errors.email = "Este email já existe";
    return res.status(400).json(errors);
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const usuario = await Usuario.create({
    nome,
    sobrenome,
    email,
    telefone,
    password: hashedPassword,
  });

  if (usuario) {
    res.status(200).json({
      _id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
    });
  }
});

const updateUsuario = asyncHandler(async (req, res) => {
  const { errors, isValid } =  validateUsuarioInput(req.body)
  if (!isValid) {
    return res.status(400).json(errors)
  }

  const usuarioId = req.params.id;
  const { nome, sobrenome, email, telefone } = req.body;
  const updateUsuario = {
    nome,
    sobrenome,
    email,
    telefone,
  };
  const usuario = await Usuario.findByIdAndUpdate(usuarioId, updateUsuario);
  res.status(200).json({ message: "Usuario atualizado" });
});

const deleteUsuario = asyncHandler(async (req, res) => {
  await Usuario.findByIdAndDelete(req.params.id);

  res.status(200).json({ message: "Usuario apagado" });
});

const getMe = asyncHandler(async (req, res) => {
  const { _id, nome, email } = await Usuario.findById(req.user.id);

  res.status(200).json({
    id: _id,
    nome,
    email,
  });
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: "1d",
  });
};

module.exports = {
  getUsuario,
  setUsuario,
  updateUsuario,
  deleteUsuario,
  loginUsuario,
  getMe,
};
