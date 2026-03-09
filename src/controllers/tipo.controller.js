const Tipo = require("../models/Tipo");

exports.crearTipo = async (req, res) => {
    res.status(201).json(await Tipo.create(req.body));
};

exports.obtenerTipos = async (req, res) => {
    res.json(await Tipo.find());
};

exports.obtenerTipo = async (req, res) => {
    const tipo = await Tipo.findById(req.params.id);

    if (!tipo) {
        return res.status(404).json({ mensaje: "Tipo no encontrado" });
    }

    res.json(tipo);
};

exports.actualizarTipo = async (req, res) => {
    res.json(await Tipo.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

exports.eliminarTipo = async (req, res) => {
    await Tipo.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Tipo eliminado" });
};