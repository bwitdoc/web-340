/*=======================
Title: Exercise 5.2
Author: Brittany Dockter
Date: 8 August 2019
Modified by: Brittany Dockter
Description: EJS templates
=========================
*/

var express = require("express");
var http = require("http");
var path = require("path");
app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

var f = [
    "Adam",
    "Bradley", 
    "Olivia",
    "Stephanie"
];

app.get("/", function(request, response) {
    response.render("index", {
        names: f
    })
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});