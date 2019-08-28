/*
============================================
; Title:  Exercise 4.3
; Author: Brittany Dockter 
; Date:   27 August 2019
; Modified by: Brittany Dockter
; Description: HTTP Status Codes
;===========================================
*/

// Begin Header
var header = require('C:/Users/Brittany/Documents/bu-webdev/web-340/GitHub Files/Dockter-header-test.js');
// End Header

var express = require("express");
var http = require("http");
var app = express();

// 404 Error Response
app.get("/not-found", function(request, response) {
    response.status(404);
    response.json({
        error: "Sorry, nothing to see here!"
    });
});

// 200 Message Response
app.get("/ok", function(request, response) {
    response.status(200);
    response.json({
        message: "Looks like we got it right this time!"
    });
});

// 501 Error Response
app.get("/not-implemented", function(request, response) {
    response.status(501);
    response.json({
        error: "Looks like this page isn't implemented! Whoops!"
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080.");
})