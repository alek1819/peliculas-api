const express = require("express");
const router = express.Router();
const controller = require("../controllers/director.controller");

router.post("/", controller.crearDirector);
router.get("/", controller.obtenerDirectores);
router.get("/:id", controller.obtenerDirector);
router.put("/:id", controller.actualizarDirector);
router.delete("/:id", controller.eliminarDirector);

module.exports = router;