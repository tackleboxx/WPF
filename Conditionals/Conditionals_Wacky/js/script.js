// JavaScript Conditionals_Wacky | Robert Dunn | Conditionals Worksheet | 10-14-13

/* How many miles to oil change

 */

var milesDriven = 1000; //miles driven
var oilChange = 3000; // actual miles you should drive before oil change

// if miles driven is greater or equal to oil change print you need oil
if (milesDriven >= oilChange) {
    console.log("You need an oil change");
}
// if miles driven is equal to or greater than 2500 print you should think about oil change
if(milesDriven === oilChange || milesDriven > 2500) {
    console.log("You should think about getting an oil change");
}else if(milesDriven <= oilChange) { // if miles driven is less or equal to oil change then print you don't need oil change
    console.log("You don't need an oil change");
}