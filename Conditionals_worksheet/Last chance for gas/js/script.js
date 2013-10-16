// JavaScript Last chance for gas | Robert Dunn | Conditionals Worksheet | 10-14-13

/* Last Chance for Gas!

 A driver has to determine if they can make it across the desert with their current fuel.  They are about to past the last gas station for the next 200 miles and they need to determine whether they should stop now for gas or not.


 Given:
 Gas efficiency of the car (in mpg)
 Gauge reading of the gas tank (in %)
 Car’s gas tank capacity (in gallons)
 Result To Print Out:
 “Yes, you can make it without stopping for gas!” or “You only have X gallons of gas in your tank, better get gas now while you can!”


 */

var mpg = 30; // miles per gallon
var gasGauge =  .75; // gas gauge in percent
var gasTank = 9; // in gallons
var result = (mpg * gasTank) * gasGauge;

if(result > 200) {
    console.log("Yes, you can make it without stopping for gas!");
}else{
    console.log("You only have" + " " + result + " " + "gallons of gas in your tank, better get gas now while you can!");
}

