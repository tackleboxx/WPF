// JavaScript unctions_Industry | Robert Dunn | 10-24-13

/* Functions Personal

 */

// do i have enough material for my roof?

var width = prompt('What is the width of your roof? (in feet)');
var length = prompt('What is the length of your roof? (in feet)');
var material = 50;
var sqFoot = width * length;

if(material >= sqFoot) {
    console.log("I have enough material to do my roof!");
}
