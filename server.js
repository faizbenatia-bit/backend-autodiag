const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Bienvenue sur AutoDiag"
    });
});

const PORT = process.env.PORT || 5000;

// Connexion à la base de données avant le démarrage
const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Serveur actif sur le port ${PORT}`);
    });
};

startServer();