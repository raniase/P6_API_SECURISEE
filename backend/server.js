const express = require("express");
const cors = require("cors");
const app = express();
//Declarer corsOptions origin: Accepter les requetes qui proviennent de cette URL (Application Front end)
var corsOptions = {
  origin: "http://localhost:8081"
};
//Ajouter corsOptions dans le module cors
app.use(cors(corsOptions));
//Analyser les cors des requetes
app.use(express.json());
//requetes initiale pour tester 
app.get("/", (req, res) => {
  res.json({ message: "Projet 6" });
});
//Demarrer l'application bac avec un message dans la console indiquant le port utilisé
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("./models");
const Role = db.role;
const dbConfig = require("./config/db.config");
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to Database");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });