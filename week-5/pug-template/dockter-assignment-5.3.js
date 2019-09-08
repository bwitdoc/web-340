var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", function(request, response) {
    response.render("index", {
        message: "This page was created using Pug!"
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});