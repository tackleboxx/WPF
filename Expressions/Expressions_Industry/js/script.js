// JavaScript Expressions Industry | Robert Dunn | 10-9-13

// How long am I on a computer a week?

var hoursWorked = prompt('How many hours do you work a week?');
var breaks = prompt('How many (hours) for breaks do you take for the week?');
var otherBreaks = prompt('Do you take any other breaks(in hours)?');
var actualHours = Number(hoursWorked) - (Number(breaks) + Number(otherBreaks));
console.log(Number(actualHours));