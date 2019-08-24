/*
============================================
; Title:  Exercise 3.3
; Author: Brittany Dockter 
; Date:   24 August 2019
; Modified by: Brittany Dockter
; Description: Advanced Routing with Node.js
;===========================================
*/

// Begin Header
var header = require('C:/Users/Brittany/Documents/bu-webdev/web-340/GitHub Files/Dockter-header-test.js');
// End Header


// Set up to require Express, HTTP, path, Morgan
var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();


// Create App requirements
app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");


// Configure Logger
app.use(logger("short"));

app.get("/:productId", function(req, res) {
    var productId = parseInt(req.params.productId, 10);
    res.render("index", {
        productId: productId
    })
});

// Create Server
http.createServer(app).listen(3001, function() {
    console.log("Application started and listening on port", 3001);
});