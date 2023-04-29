const asyncHandler = require('express-async-handler')
const Usuario = require('../models/usuarioModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// DESC     Procura usuarios
const getUsuario = asyncHandler(async (req, res) => {
    const usuarios = await Usuario.find()
    if (!usuarios || usuarios.length === 0){
        res.status(400)
        throw new Error("Nenhum usuarios encontrado")
    }

    res.status(200).json(usuarios)
})


// DESC login de usuarios
const loginUsuario = asyncHandler(async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    
    const usuario = await Usuario.findOne({ "email": email})
    
    if(usuario && (await bcrypt.compare(password, usuario.password))) {
        res.status(201).json({
            _id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            token: generateToken(usuario._id)
        })
    } else {
        res.status(400)
        throw new Error("Email ou password errada")
    }
})


// DESC cadastra usuarios
const setUsuario = asyncHandler(async (req, res) => {
    const { nome, sobrenome, email, password, telefone, confirmarPassword } = req.body
    
    if (!nome || !email || !password || !confirmarPassword){
        res.status(400)
        throw new Error("Preencha os campos obrigatórios")
    }

    // Verificar se o email ja existe na base de dados
    if (await Usuario.findOne({ email })) {
        throw new Error("Esse email já existe")
    }
    
    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const usuario = await Usuario.create({
        nome,
        sobrenome,
        email,
        telefone,
        password: hashedPassword
    })

    if (usuario) {
        res.status(201).json({
            _id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
        })
    } else {
        res.status(400)
        throw new Error("Informações de usuario invalidas")
    }
})

const updateUsuario = asyncHandler(async (req, res) => {
    const usuarioId = req.params.id
    const { nome, sobrenome, email, telefone } = req.body
    const updateUsuario = {
        nome,
        sobrenome,
        email,
        telefone
    }
    const usuario = await Usuario.findByIdAndUpdate(usuarioId, updateUsuario)
    res.status(200).json({ message: "Usuario atualizado"})
})

const deleteUsuario = asyncHandler(async (req, res) => {
    await Usuario.findByIdAndDelete(req.params.id)

    res.status(200).json({ message: "Usuario apagado"})
})

const getMe = asyncHandler(async (req, res) => {
    const { _id, nome, email } = await Usuario.findById(req.user.id)

    res.status(200).json({
        id: _id,
        nome,
        email,
    })
})

const generateToken = id => {
    return jwt.sign({id}, process.env.SECRET, {
        expiresIn: '1d'
    })
}

module.exports = {
    getUsuario,
    setUsuario,
    updateUsuario,
    deleteUsuario,
    loginUsuario,
    getMe
}
