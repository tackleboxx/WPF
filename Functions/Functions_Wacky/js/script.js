// JavaScript unctions_Wacky | Robert Dunn | 10-24-13

/* Functions Wacky

 */

// how fast am i going in kilometers?

var miles = prompt('How fast are you going in miles per hour?');
var kilometers = 1.6;
var calcKilo = function(miles, kilometers){
    var convert = miles * kilometers;
    return convert;
}

var actualKilo = calcKilo(miles,kilometers);
console.log("You are going " + actualKilo + " kilometers per hour");