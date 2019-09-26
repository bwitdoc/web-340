/*
=======================================
; Title:  app.js
; Author: Brittany Dockter
; Date:   25 September 2019
; Description: app.js
;======================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var helmet = require("helmet");
var cookieParser = require("cookie-parser");
var csurf = require("csurf");
var csrfProtection = csrf({cookie: true});

var mongoDB = "mongodb+srv://admin:admin@buwebdev-cluster-1-pohh3.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoDB, {
    userMongoClient: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function() {
    console.log("Application connected to mLab");
});

// Setup CSRF Protection
var csrfProtection = csrf({cookie: true});

// Initialize Express Application
var app = express();

// Use Statements
app.use(logger("short"));
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next) {
    var token = request.csrfToken();
    response.cookie("XSRF-TOKEN", token);
    response.locals.csrfToken = token;
    next();
});

// Set Statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");


// Routing
app.get("/", function(request, response) {
    response.render("index", {
        message: "XSS Prevention Example"
    });
});
app.get("/", function(request, response) {
    response.render("index", {
        message: "New Employee Entry Page"
    });
});

app.post("/process", function(request, response) {
    console.log(request.body.txtName);
    response.redirect("/");
});

// Start Server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});