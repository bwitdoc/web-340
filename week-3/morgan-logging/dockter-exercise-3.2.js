/*
============================================
; Title:  Exercise 3.2
; Author: Brittany Dockter 
; Date:   24 August 2019
; Modified by: Brittany Dockter
; Description: Using Logging with Node.js
;===========================================
*/

// Begin Header
var header = require('C:/Users/Brittany/Documents/bu-webdev/web-340/GitHub Files/Dockter-header-test.js');
// End Header

// Require Express, Http, Path, Morgan
var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

// Set App Requirements
app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.use(logger("short"));

app.get("/", function(request, response) {
    response.render("index", {
        message: "Welcome to my example of a Morgan Logging server. Stay as long as you like!"
    });
});

// Create Server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080");
});