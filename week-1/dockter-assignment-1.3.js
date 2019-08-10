/*
============================================
; Title:  Exercise 1.3
; Author: Brittany Dockter 
; Date:   10 August 2019
; Modified by: Brittany Dockter
; Description: 
;===========================================
*/

// Begin Header
var header = require('C:/Users/Brittany/Documents/bu-webdev/web-340/GitHub Files/Dockter-header-test.js');
// End Header

/* Expected Output
https:
www.bu.edu
id=21208041
*/

// Start Program

var url = require('url');

var parsedURL = url.parse('https://www.bu.edu/profile?id=21208041');

console.log("");
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

// End Program