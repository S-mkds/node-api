const express = require('express'); // import express
const app = express();

// Database
require("./database.js");

// Middleware express
app.use(express.json());
// app.use(cors()); // CORS est un package node.js pour fournir un middleware Connect/Express qui peut être utilisé pour activer CORS avec diverses options.
// app.use(helmet()); // aide à protéger votre application de certaines des vulnérabilités bien connues du Web en configurant de manière appropriée des en-têtes HTTP

// accés à l'API depuis n'importe quelle origine
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// *****Import des Routers*****
//mongodb
const userRoutes = require("./Routers/User-router");
const groupsRoutes = require("./Routers/Groups-router");
//MySQL
const userRoutesSql = require("./Routers/User-router-sql");
const groupsRoutesSql = require("./Routers/Groups-router-sql");

// *****Use Routers*****
//MongoDB
// app.use(userRoutes);
// app.use(groupsRoutes);

//MySQL
app.use(userRoutesSql);
// app.use(groupsRoutesSql);


module.exports = app;

// Server nodejs connection fast
// app.listen(3000, () => {
//     console.log("Serveur sur le port 3000, en route")
// }); 
