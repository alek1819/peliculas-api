const Director = require("../models/Director");

exports.crearDirector = async (req, res) => {
    const director = await Director.create(req.body);
    res.status(201).json(director);
};

exports.obtenerDirectores = async (req, res) => {
    res.json(await Director.find());
};

exports.obtenerDirector = async (req, res) => {
    const director = await Director.findById(req.params.id);

    if (!director) {
        return res.status(404).json({ mensaje: "Director no encontrado" });
    }

    res.json(director);
};

exports.actualizarDirector = async (req, res) => {
    res.json(await Director.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

exports.eliminarDirector = async (req, res) => {
    await Director.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Director eliminado" });
};