require('dotenv').config();
const path = require('path')
const express = require('express');
// const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const app = express();
const port = 5050;
const body_parser = require('body-parser');
const connectMongo = require('./utils/connect');
const projet_router = require('./routes/projetRoute');
const article_router = require('./routes/articleRoute');
const service_router = require('./routes/serviceRoute');
const contactInfo_router = require('./routes/contactInfoRoute');
const coordonneClient_router = require('./routes/coordonneClientRoute');
const admin = require('./routes/adminRoute');
const puissance_router = require('./routes/puissanceRoute');
const cors = require('cors');

connectMongo();
const corsOptions = {
  origin: 'http://localhost:3000',
    credentials:true
};
app.use(cors(corsOptions));
// app.use(cookieSession({
//   name: 'session',
//   secret: ['key1', 'key2'],
//   httpOnly: true,
//   secure: false,
//   path: '/',
//   maxAge: 30 * 24 * 60 * 60 * 1000,
//   sameSite: 'none'
// }));
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '/uploads')));
app.use(body_parser.json());
app.use(projet_router);
app.use(article_router);
app.use(service_router);
app.use(contactInfo_router);
app.use(coordonneClient_router);
app.use(admin);
app.use(puissance_router);
app.listen(port, () => {
  console.log(`Running at Port ${port}`);
});
