// Import des modules nécessaires
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const enfantRoutes = require('./routes/enfantRoutes');
const signalementRoutes = require('./routes/signalementRoutes');
const citoyenRoutes = require('./routes/citoyenRoutes');
const piecejointeImgRoutes = require('./routes/piecejointeimgRoutes');
const piecejointeVideoRoutes = require('./routes/piecejointeVideoRoutes');
const piecejointeVocaleRoutes = require('./routes/piecejointeVocaleRoutes');





// Import des fichiers de configuration
const db = require('./utils/db');

// Création de l'application Express
const app = express();

// Configuration des middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./public/images')) ;
app.use(express.static('./public/videos')) ;
app.use(express.static('./public/vocaux')) ;

// Configuration des routes
app.use('/enfants', enfantRoutes);
app.use('/signalement', signalementRoutes);
app.use('/citoyen', citoyenRoutes);
app.use('/images', piecejointeImgRoutes);
app.use('/videos', piecejointeVideoRoutes);
app.use('/vocaux', piecejointeVocaleRoutes);

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Une erreur s\'est produite sur le serveur');
});

// Création d'une instance Sequelize
const sequelize = new Sequelize('onppe_db', 'postgres', 'sept2020*', {
    host: 'localhost',
    dialect: 'postgres',
});

// Export de l'instance Sequelize
module.exports = sequelize;

// Lancement du serveur
app.listen(4000, () => { console.log("Serveur lancé sur le port 4000");});

app.get("/", (req, res) => {res.send("helloworld!");});
