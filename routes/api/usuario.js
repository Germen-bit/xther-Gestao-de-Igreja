const express = require('express')
const router = express.Router()
const { getMe,getUsuario, loginUsuario, setUsuario, updateUsuario, deleteUsuario} = require ('../../controller/usuarioController')
const {protect} = require('../../middleware/authMiddleware')

router.route('/').get(getUsuario).post(setUsuario)
router.route('/:id').put(protect,updateUsuario).delete(protect,deleteUsuario)
router.post('/login', loginUsuario)
router.get('/me', protect, getMe)

module.exports = router;