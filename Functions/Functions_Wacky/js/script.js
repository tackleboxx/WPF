// JavaScript unctions_Wacky | Robert Dunn | 10-24-13

/* Functions Wacky

 */

// how fast am i going in kilometers?

var miles = prompt('How fast are you going in miles per hour?'); // prompt for miles per hour
var kilometers = 1.6; // kilo to miles
var calcKilo = function(miles, kilometers){ //setting up function
    var convert = miles * kilometers; "setting up the conversion"
    return convert; // returned conversion
}

var actualKilo = calcKilo(miles,kilometers); //invoking
console.log("You are going " + actualKilo + " kilometers per hour"); //printing to console