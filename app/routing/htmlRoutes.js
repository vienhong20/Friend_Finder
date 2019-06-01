console.log("HTML Route Connected Successfully");

//node dependencies
const path = require("path");

//routes
function htmlRoutes(app) {
  //a GET route
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  });
  //a default USE route that leads to home.html
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });
}
//export for use in main server.js
module.exports = htmlRoutes;
