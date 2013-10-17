// JavaScript Conditionals_Industry | Robert Dunn | Conditionals Worksheet | 10-14-13

/* Can I travel to the meeting in california alone

 */

var yearBorn = prompt('What year was you born?'); // get users date of birth
var currentYear = prompt('What year is it?'); // get current year
var flyAloneAge = 18;// the age you can fly alone
var actualAge = currentYear - yearBorn;// calculate actual age by subtracting year born from current year
actualAge;

/*

if (actualAge > flyAloneAge ) {
    console.log("you can fly alone!");
}else {
    console.log("You need an adult to fly with you");
}

*/

// if actual age is greater tha fly age then print you can fly alone
//otherwise you need an adult
(actualAge > flyAloneAge) ? console.log("you can fly alone!") : console.log("You need an adult to fly with you");