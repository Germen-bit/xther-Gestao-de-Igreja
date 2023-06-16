const express = require('express')
const router = express.Router()
const { getTarefas, setTarefas, updateTarefas, deleteTarefas } = require('../../controller/tarefasController')
const { protect } = require('../../middleware/authMiddleware')

router.route('/:id').get(protect, getTarefas).post(protect, setTarefas)
router.route('/:id').put(protect, updateTarefas).delete(protect, deleteTarefas)

module.exports = router