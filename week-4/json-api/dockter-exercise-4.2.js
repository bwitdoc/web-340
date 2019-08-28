/*
============================================
; Title:  Exercise 4.2
; Author: Brittany Dockter 
; Date:   27 August 2019
; Modified by: Brittany Dockter
; Description: JSON API's
;===========================================
*/

// Begin Header
var header = require('C:/Users/Brittany/Documents/bu-webdev/web-340/GitHub Files/Dockter-header-test.js');
// End Header

var express = require("express");
var http = require("http");
var app = express();

app.get("/vehicle/:id", function(request, response) {
    var id = parseInt(request.params.id, 10);
    response.json({
        carMake: "Honda",
        carModel: "Civic EX Hatchback",
        carColor: "White",
        carYear: "2018"
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080.");
});