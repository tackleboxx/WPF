// JavaScript Conditionals_Wacky | Robert Dunn | Conditionals Worksheet | 10-14-13

/* How many miles to oil change

 */

var milesDriven = 1000;
var oilChange = 3000;


if (milesDriven >= oilChange) {
    console.log("You need an oil change");
}
if(milesDriven === oilChange || milesDriven > 2500) {
    console.log("You should think about getting an oil change");
}else if(milesDriven <= oilChange) {
    console.log("You don't need an oil change");
}