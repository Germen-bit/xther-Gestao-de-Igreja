const express = require("express")
const router = express.Router()
const { getPastor, getPastorByName, setPastor, deletePastor, updatePastor } = require('../../controller/pastorController')
const { protect } = require('../../middleware/authMiddleware')

router.route('/').get(protect,getPastor).post(protect,setPastor)
router.route('/:id').put(protect,updatePastor).delete(protect,deletePastor)
router.get('/:name',protect, getPastorByName)

module.exports = router;