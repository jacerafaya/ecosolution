const express = require("express");

const router = new express.Router();
const articleController = require("../controller/articleController");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/imagesArticle');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
});

const upload = multer({
    limits: {
        fileSize: 3000000
    },
    storage: storage
});

router.post("/article/ajouter_article", upload.array('images', 10), async (req, res) => {
    articleController.addArticle(req, res);
});

router.get("/article/:_id", async (req, res) => {
    articleController.getArticleById(req, res);
});

router.get("/articles", async (req, res) => {
    articleController.getArticles(req, res);
});

router.put("/article/update/:_id", upload.array('images', 10), async (req, res) => {
    articleController.modifierArticle(req, res);
});


router.delete("/article/:_id", async (req, res) => {
    articleController.deleteById(req, res);
});

module.exports = router;
