//node dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//set up Express app
const app = express();
const PORT = process.env.PORT || 8888;

//link to html and api routes
const apiRoutes = require("./app/routing/apiRoutes.js");
const htmlRoutes = require("./app/routing/htmlRoutes.js");

//server routing map
apiRoutes(app); //API route - must be first due to the html default
htmlRoutes(app); //HTML route*/

//set up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//listener - start the server
app.listen(PORT => {
  console.log("App listening on PORT: " + PORT);
});
