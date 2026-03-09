const express = require("express");
const router = express.Router();
const controller = require("../controllers/media.controller");

router.post("/", controller.crearMedia);
router.get("/", controller.obtenerMedias);
router.get("/:id", controller.obtenerMedia);
router.put("/:id", controller.actualizarMedia);
router.delete("/:id", controller.eliminarMedia);

module.exports = router;