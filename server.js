
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;
require('dotenv').config()

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, '/public')));

// Requiring our models for syncing
var db = require("./models");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var indexRoutes = require("./controllers/webay_controller.js");

app.use("/", indexRoutes);
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    
});
