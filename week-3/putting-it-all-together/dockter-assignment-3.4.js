/*
============================================
; Title:  Assignment 3.4
; Author: Brittany Dockter 
; Date:   25 August 2019
; Modified by: Brittany Dockter
; Description: Putting it all together
;===========================================
*/

// Begin Header
var header = require('C:/Users/Brittany/Documents/bu-webdev/web-340/GitHub Files/Dockter-header-test.js');
// End Header

// Begin Program

// Require express, http, path, and morgan
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();

// Location of ejs files
app.set("views", path.resolve(__dirname, "views"));


// Establish the view engine
app.set("view engine", "ejs");


// Set string using Morgan
app.use(logger("short"));


// Request and response for home page
app.get("/", function(req, res) {
    res.render("index", {
        message: "Home "
    });
});

// Request and response for about page
app.get("/about", function(req, res) {
    res.render("about", {
        message: "About "
    });
});

// Request and response for contact page
app.get("/contact", function(req, res) {
    res.render("contact", {
        message: "Contact "
    });
});

// Request and response for products page
app.get("/products", function(req, res) {
    res.render("products", {
        message: "Products "
    });
});

// Create error response code
app.use(function (req, res) {
    res.statusCode= 404;
    res.end("404!/n");
})

// Create server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080.");
});