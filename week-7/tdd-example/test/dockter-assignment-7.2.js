/* =========================
; Title: Assignment 7.2
; Name: Brittany Dockter
; Date: 17 September 2019
; Modified by: Brittany Dockter
; Description: Creating a simple TDD test
===========================*/

var assert = require("assert");

describe("String#split", function() {
    it("should return an array of fruits", function() {
        assert(Array.isArray("Apple, Orange, Mango".split(",")));
    });
});

// Passed function 
function getFruits(str) {
    return str.split(",");
}

module.exports = getFruits;