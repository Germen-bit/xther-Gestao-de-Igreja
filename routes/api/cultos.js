const express = require('express')
const router = express.Router()
const { getCultos, setCultos, updateCultos, deleteCultos } = require('../../controller/cultosController')
const { protect } = require('../../middleware/authMiddleware')

router.route('/').get(protect, getCultos).post(protect,setCultos)
router.route('/:id').put(protect, updateCultos).delete(protect, deleteCultos)

module.exports = router