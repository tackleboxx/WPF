// JavaScript Conditionals_Industry | Robert Dunn | Conditionals Worksheet | 10-14-13

/* Can I travel to the meeting in california alone

 */

var yearBorn = prompt('What year was you born?'); // get users date of birth
var currentYear = prompt('What year is it?'); // get current year
var flyAloneAge = 18;
var actualAge = currentYear - yearBorn;
actualAge;

if (actualAge > flyAloneAge ) {
    console.log("you can fly alone!")
}else {
    console.log("You need an adult to fly with you")
}
