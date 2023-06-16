const express = require('express')
const router = express.Router()
const { getLancamentos, setLancamentos, deleteLancamentos } = require('../../controller/lancamentosController')
const { protect } = require('../../middleware/authMiddleware')

router.route('/igreja-filha/:id').post(protect, setLancamentos).get(protect, getLancamentos)
router.route('/:id').delete(protect, deleteLancamentos)

module.exports = router 