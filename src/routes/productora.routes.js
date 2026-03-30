const express = require("express");
const router = express.Router();
const controller = require("../controllers/productora.controller");

router.post("/", controller.crearProductora);
router.get("/", controller.obtenerProductoras);
router.get("/:id", controller.obtenerProductora);
router.put("/:id", controller.actualizarProductora);
router.delete("/:id", controller.eliminarProductora);

module.exports = router;