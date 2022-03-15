require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const helmet = require('helmet');
const path = require('path');
const userRoutes = require("./routes/user.route");

const cors = require("cors");
let corsOptions = {
  origin: "http://localhost:8081"
};

//Connexion à la base de données
mongoose.connect(`mongodb+srv://rania:rania123@cluster0.gnooa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  


//Permet de sécuriser nos en-têtes HTPP
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));

app.use(function (req, response, next) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});
app.use(cors(corsOptions));

//Gestion des requêtes POST
app.use(express.json());

app.use('/api/auth', userRoutes);


module.exports = app;