const express = require("express");
const router = express.Router();
const controller = require("../controllers/tipo.controller");

router.post("/", controller.crearTipo);
router.get("/", controller.obtenerTipos);
router.get("/:id", controller.obtenerTipo);
router.put("/:id", controller.actualizarTipo);
router.delete("/:id", controller.eliminarTipo);

module.exports = router;