// Connection on data base MongoDB with mongoose.connect
// const mongoose = require("mongoose"); // import de mongoose

// mongoose
//   .connect('mongodb+srv://mongo-api-node:wYvwrFSJuiiXp7HJ@cluster0.cmrendi.mongodb.net/?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connexion à MongoDB réussie !"))
//   .catch(() => console.log("Connexion à MongoDB échouée !"));

// ******************Connection on data base Mysql with Xampp ***************************************************************
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node-api"
});

con.connect(function(err) {
  if (err) throw err + console.log("Failed to connect Mysql database !");;
  console.log("Connected to Mysql database !");
})

//**** Vérifaication des données des tables dans la base de donnée avec un console.log ****/
  // con.query("SELECT * FROM user", function (err, result, fields){
  //   console.log(result);
  // })

  // con.query("SELECT * FROM groupes", function (err, result, fields){
  //   console.log(result);
  // })