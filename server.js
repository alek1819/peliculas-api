require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");

const PORT = process.env.PORT || 4000;

const startServer = async () => {
    try {
        await connectDB(); // 👈 espera conexión

        app.listen(PORT, () => {
            console.log(`Servidor corriendo en puerto ${PORT}`);
        });

    } catch (error) {
        console.error("Error al iniciar:", error);
        process.exit(1);
    }
};

startServer();