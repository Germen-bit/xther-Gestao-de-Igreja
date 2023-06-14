const express = require('express')
const router = express.Router()
const { getIgreja, setIgreja, getIgrejaByHandle } = require('../../controller/igrejaFilhaController')

router.route('/').get(getIgreja).post(setIgreja)
router.route('/:handle').get(getIgrejaByHandle)

module.exports = router