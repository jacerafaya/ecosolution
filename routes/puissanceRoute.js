const express = require("express");
const router = new express.Router();
const puissanceController = require("../controller/puissanceController");


router.post("/puissance/nouveauPuissance", async (req, res) => {
    console.log("houni router")
    puissanceController.addPuissance(req, res);
    
});



router.get("/puissance", async (req, res) => {
    puissanceController.getPuissance(req, res);
});


router.put("/puissance/update/:_id", async (req, res) => {
    puissanceController.modifierPuissance(req, res);
});


module.exports = router;
