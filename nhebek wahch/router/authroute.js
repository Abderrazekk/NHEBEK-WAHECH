const express = require("express");
const authController = require("../controller/authcontroller");

const router = express.Router();

// Route pour la page d'accueil
router.get("/", authController.getHomePage);

// Routes pour l'enregistrement et la connexion
router.get("/register", authController.getRegisterPage);
router.post("/register", authController.postRegister);

router.get("/login", authController.getLoginPage);
router.post("/login", authController.postLogin);

// Routes pour les différentes pages du site
router.get("/home", (req, res) => {
    res.render("home"); // Rend la vue ou le template de la page Home
});

router.get("/workout", (req, res) => {
    res.render("workout"); // Assurez-vous que "workout.ejs" est bien la vue pour les entraînements
});
router.get("/workout2", (req, res) => {
    res.render("workout2"); // Assurez-vous que "workout.ejs" est bien la vue pour les entraînements
});
router.get("/workout3", (req, res) => {
    res.render("workout3"); // Assurez-vous que "workout.ejs" est bien la vue pour les entraînements
});

router.get("/nutrition", (req, res) => {
    res.render("nutrition"); // Assurez-vous que "nutrition.ejs" est bien la vue pour la nutrition
});

router.get("/shop", (req, res) => {
    res.render("shop"); // Assurez-vous que "shop.ejs" est bien la vue pour la boutique
});

router.get("/about", (req, res) => {
    res.render("about"); // Assurez-vous que "about.ejs" est bien la vue pour la page "À propos"
});

router.get("/contact", (req, res) => {
    res.render("contact"); // Assurez-vous que "contact.ejs" est bien la vue pour la page de contact
});

module.exports = router;
