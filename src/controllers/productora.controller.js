const Productora = require("../models/Productora");

exports.crearProductora = async (req, res) => {
    res.status(201).json(await Productora.create(req.body));
};

exports.obtenerProductoras = async (req, res) => {
    res.json(await Productora.find());
};

exports.obtenerProductora = async (req, res) => {
    const productora = await Productora.findById(req.params.id);

    if (!productora) {
        return res.status(404).json({ mensaje: "Productora no encontrada" });
    }

    res.json(productora);
};

exports.actualizarProductora = async (req, res) => {
    res.json(await Productora.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

exports.eliminarProductora = async (req, res) => {
    await Productora.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Productora eliminada" });
};