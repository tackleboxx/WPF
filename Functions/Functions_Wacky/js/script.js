// JavaScript unctions_Industry | Robert Dunn | 10-24-13

/* Functions Personal

 */

// do i have enough material for my roof?

var width = prompt('What is the width of your roof? (in feet)'); // set prompt for width
var length = prompt('What is the length of your roof? (in feet)'); // set prompt for length
var material = 50; // set material had
var sqFoot = width * length;// set calculation for square foot
/*
if(material >= sqFoot || sqFoot === material) { // started if statement
    console.log("I have enough material to do my roof!");// print to console log if i have enough material
}else if(material < sqFoot) { // created else if statement
    console.log("I may need more material!");// print to console
}else{ // created else statement
    console.log("I do not have enough material to do my roof!"); // print to console
}
*/

// created tereny for the else if statement
(sqFoot <= material) ? console.log("I have enough material to do my roof!") : console.log("I do not have enough material to do my roof!");