// JavaScript Conditionals_Wacky | Robert Dunn | Conditionals Worksheet | 10-14-13

/* How many miles to oil change

 */

var milesDriven = 2500;
var oilChange = 3000;
var result = oilChange - milesDriven;

if (result >= oilChange) {
    console.log("You need an oil change");
}
if(result < oilChange || result > 2500) {
    console.log("You should think about getting an oil change");
}else if(result < oilChange) {
    console.log("You don't need an oil change");
}