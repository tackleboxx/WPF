

// JavaScript Expressions Industry | Robert Dunn | 10-9-13

// How long am I on a computer a week?

var hoursWorked = prompt('How many hours do you work a week?');// actual hours worked
var breaks = prompt('How many (hours) for breaks do you take for the week?');//deduct for breaks
var otherBreaks = prompt('Do you take any other breaks(in hours)?');// deduct other breaks
var actualHours = Number(hoursWorked) - (Number(breaks) + Number(otherBreaks));// calculations hours minus breaks
console.log("I work on a computer" + " " + Number(actualHours) + " " + "hours a week");//print from console log