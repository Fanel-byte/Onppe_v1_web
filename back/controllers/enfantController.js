const db = require("../utils/db");

// Récupérer la liste des enfants
exports.getEnfants = (req, res) => {
db.query("SELECT is , nom, prenom, age, sexe , adresse , w.namear as wilaya  FROM enfant e JOIN wilaya w on e.wilayacode =w.code", (err, result) => {
if (err) {
console.log(err);
res.status(500).json({ message: "Une erreur s'est produite." });
} else {
res.status(200).json(result.rows);
}
});
};

// Récupérer un enfant par son id
exports.getEnfantById = (req, res) => {
const enfantId = req.params.id;
db.query("SELECT id , nom, prenom, age, sexe , adresse , w.namear as wilaya  FROM enfant e JOIN wilaya w on e.wilayacode =w.code WHERE e.id = $1", [enfantId], (err, result) => {
if (err) {
console.log(err);
res.status(500).json({ message: "Une erreur s'est produite." });
} else if (result.rows.length === 0) {
res.status(404).json({ message: "Enfant introuvable." });
} else {
res.status(200).json(result.rows[0]);
}
});
};

// Ajouter un enfant
exports.createEnfant = (req, res) => {
    var query="INSERT INTO enfant (nom, prenom, age, sexe ,situationparent, adresse , wilayacode) VALUES ($1, $2, $3, $4 , $5 , $6 , $7) RETURNING id";
    db.query(query, [req.body.nom, req.body.prenom, req.body.age, req.body.sexe , req.body.situationparent ,req.body.adresse , req.body.wilayacode] , (err, result) => {
        if (err) {
        console.log(err);
        res.status(500).json({ message: "Une erreur s'est produite." });
        } else {
        res.status(201).json(result.rows[0]);
        }
    });
};

// Modifier un enfant
exports.updateEnfant = (req, res) => {
const enfantId = req.params.id;
const { nom, prenom, date_naissance, sexe } = req.body;
db.query(
"UPDATE enfant SET nom = $1, prenom = $2, date_naissance = $3, sexe = $4 WHERE id = $5 RETURNING *",
[nom, prenom, date_naissance, sexe, enfantId],
(err, result) => {
if (err) {
console.log(err);
res.status(500).json({ message: "Une erreur s'est produite." });
} else if (result.rows.length === 0) {
res.status(404).json({ message: "Enfant introuvable." });
} else {
res.status(200).json(result.rows[0]);
}
});
};

// Supprimer un enfant
exports.deleteEnfant = (req, res) => {
const enfantId = req.params.id;
db.query("DELETE FROM enfant WHERE id = $1 RETURNING *", [enfantId], (err, result) => {
if (err) {
console.log(err);
res.status(500).json({ message: "Une erreur s'est produite." });
} else if (result.rows.length === 0) {
res.status(404).json({ message: "Enfant introuvable." });
} else {
res.status(200).json({ message: "Enfant supprimé avec succès.", enfant: result.rows[0] });
}
});
};