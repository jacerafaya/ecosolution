const express = require("express");
const router = new express.Router();
const contactInfoController = require("../controller/contactInfoController");


router.post("/contactInfo/nouveauContact", async (req, res) => {
    contactInfoController.addContactInfo(req, res);
});



router.get("/contactInfo", async (req, res) => {
    contactInfoController.getContactInfo(req, res);
});


router.put("/contactInfo/update/:_id", async (req, res) => {
    contactInfoController.modifierContactInfo(req, res);
});


module.exports = router;
