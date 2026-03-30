const express = require("express");
const router = express.Router();
const controller = require("../controllers/genero.controller");

router.post("/", controller.crearGenero);
router.get("/", controller.obtenerGeneros);
router.get("/:id", controller.obtenerGenero);
router.put("/:id", controller.actualizarGenero);
router.delete("/:id", controller.eliminarGenero);

module.exports = router;