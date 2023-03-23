require('dotenv').config();
const path = require('path')
const express = require("express");
const app = express();
const port = 5050;
const body_parser = require('body-parser');
const connectMongo = require('./utils/connect');
const projet_router = require('./routes/projetRoute');
const article_router = require('./routes/articleRoute');
const service_router = require('./routes/serviceRoute');
const contactInfo_router = require('./routes/contactInfoRoute');
const cors = require('cors');

connectMongo();

app.use(cors());
app.use(express.static(path.join(__dirname, '/uploads')));
app.use(body_parser.json());
app.use(projet_router);
app.use(article_router);
app.use(service_router);
app.use(contactInfo_router);

app.listen(port, () => {
  console.log(`Running at Port ${port}`);
});
