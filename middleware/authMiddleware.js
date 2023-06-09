const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Usuario = require('../models/usuarioModel')

const protect = asyncHandler(async (req, res, next) => {
    let token 

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1]

            // Verify token
            const decoded = jwt.verify(token, process.env.SECRET)

            // Get User from the token
            req.user = await Usuario.findById(decoded.id).select('-password')
 
            next()
        } catch (error) {
            res.status(401).json({error: "Não autorizado"})
        }
    }

    if (!token) {
        res.status(401).json({error: "Não autorizado"})
    }
})

module.exports = {protect}