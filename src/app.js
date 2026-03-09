const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/generos", require("./routes/genero.routes"));
app.use("/api/directores", require("./routes/director.routes"));
app.use("/api/productoras", require("./routes/productora.routes"));
app.use("/api/tipos", require("./routes/tipo.routes"));
app.use("/api/medias", require("./routes/media.routes"));

module.exports = app;