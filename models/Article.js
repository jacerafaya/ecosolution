const mongoose = require("mongoose")

const articleSchema = new mongoose.Schema({
    titre: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    contenu: {
        type: String,
        require: true
    },
    images: [String]

});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
