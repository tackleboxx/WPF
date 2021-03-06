// JavaScript Functions_worksheet | Robert Dunn |  10-24-13

/* Circumference

 Calculate the circumference of a circle.

 Parameter(s) for function:
 Radius of the circle
 Return:
 Circumference of the circle
 Result to print to the console:
 “The circumference of the circle is X”;


 */

// calculate the circumference of a circle

var radius = 5; // setting the variable radius
var pie = 3.14; // setting up variable for pie
var diameter = 2; // set up the diameter

var total = calcCircumference(radius,diameter); // setting parameters of the function
function calcCircumference(r, d ){ // started the setting the function
    var circumference = (radius * diameter) * pie; // set the calculation for circumference
    return circumference; // returned the value
}
console.log("The circumference of the circle is " + total + " inches!"); // printed to the console in inches

//--------------END OF CIRCUMFERENCE----------------

/*

 Stung!

 It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function

 Given:
 Victim’s weight (in pounds)
 Parameter(s) for function:
 Victim’s weight (in pounds)
 Return:
 Number of Bee stings
 Result to print to the console:
 “It takes X bee stings to kill this animal.


 */

// Calculate how many bee stings are needed to kill an animal

var beeStings = 8.666666667; // set how many bee stings it takes per pound
var victimsWeight = 50; // set variable for victims weight
var total = calcBeeStings(beeStings, victimsWeight); // set variable for total
function calcBeeStings(b, w){ // started function
    var stingsToKill = (beeStings * victimsWeight);// set calculation for kill
    return stingsToKill; // returned calculation
}

console.log("It takes " + total + " bee stings to kill this animal");// printed to console