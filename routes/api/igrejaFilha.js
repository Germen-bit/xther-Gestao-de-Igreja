const express = require('express')
const router = express.Router()
const { getIgreja, setIgreja, getIgrejaByHandle } = require('../../controller/igrejaFilhaController')

router.route('/').post(setIgreja) 
router.route('/:id').get(getIgreja)
router.route('/handle/:handle').get(getIgrejaByHandle)

module.exports = router