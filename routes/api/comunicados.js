const express = require("express");
const router = express.Router();
const { protect } = require('../../middleware/authMiddleware')
const {
  getComunicadosSemanal,
  setComunicado,
  updateComunicados,
} = require("../../controller/comunicadosController");

router.route("/igreja-filha/:id").get(protect, getComunicadosSemanal).post(protect, setComunicado);
router.route("/igreja-filha/").put(protect, updateComunicados)

module.exports = router;
