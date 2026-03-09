const mongoose = require("mongoose");

const GeneroSchema = new mongoose.Schema(
    {
        nombre: { type: String, required: true, unique: true },
        estado: { type: Boolean, default: true },
        descripcion: { type: String }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Genero", GeneroSchema);