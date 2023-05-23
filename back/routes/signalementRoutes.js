const express = require("express");
const router = express.Router();
const signalementController = require("../controllers/signalementController");

// Récupérer tous les signalements
router.get("/", signalementController.getAllSignalements);

// Récupérer un signalement par son ID
router.get("/getSignalementById/:id", signalementController.getSignalementById);

// Créer un nouveau signalement
router.post("/create", signalementController.createSignalement);

// Mettre à jour un signalement
router.put("/update/:id", signalementController.updateSignalement);

// Supprimer un signalement
router.delete("/delete/:id", signalementController.deleteSignalement);

module.exports = router;
