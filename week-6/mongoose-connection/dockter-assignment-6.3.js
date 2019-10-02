var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");

var mongoDB =" mLab connection string>";

mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

var app = express();
app.use(logger('dev'));

http.createServer(app).listen(5000, function() {
    console.log("Application started and listening on port 5000.");

})