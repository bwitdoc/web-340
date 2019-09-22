/*======================
; Title: Assignment 7.4
; Name: Brittany Dockter
; Date: 18 September 2019
; Modified by: Brittany Dockter
; Description: Using mongoose schemas
======================*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Employee Schema
let employeeSchema = new Schema({
    firstName: {type: String, required: true}
    lastName: {type: String, required: true}
});

var employee = mongoose.model("Employee", employeeSchema);

// Export for public use
module.exports = mongoose.model("employee", "employeeSchema");
module.exports = Employee;