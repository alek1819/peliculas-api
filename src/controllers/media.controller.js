const Media = require("../models/Media");
const Genero = require("../models/Genero");
const Director = require("../models/Director");
const Productora = require("../models/Productora");

exports.crearMedia = async (req, res) => {
    const { genero, director, productora } = req.body;

    const generoActivo = await Genero.findOne({ _id: genero, estado: true });
    const directorActivo = await Director.findOne({ _id: director, estado: true });
    const productoraActiva = await Productora.findOne({ _id: productora, estado: true });

    if (!generoActivo || !directorActivo || !productoraActiva) {
        return res.status(400).json({ error: "Alguna referencia está inactiva" });
    }

    const media = await Media.create(req.body);
    res.status(201).json(media);
};

exports.obtenerMedias = async (req, res) => {
    const medias = await Media.find()
        .populate("genero")
        .populate("director")
        .populate("productora")
        .populate("tipo");

    res.json(medias);
};

exports.obtenerMedia = async (req, res) => {
    const media = await Media.findById(req.params.id)
        .populate("genero")
        .populate("director")
        .populate("productora")
        .populate("tipo");

    if (!media) {
        return res.status(404).json({ mensaje: "Media no encontrada" });
    }

    res.json(media);
};

exports.actualizarMedia = async (req, res) => {
    res.json(await Media.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

exports.eliminarMedia = async (req, res) => {
    await Media.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Media eliminada" });
};