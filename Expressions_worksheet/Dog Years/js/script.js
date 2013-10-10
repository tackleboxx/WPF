// JavaScript Dog Years | Robert Dunn | Expressions Worksheet | 10-9-13

/*Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7 years old in “dog years.”  Calculate how old Sparky the pit bull is in dog years based on his actual age.
 Givens:

 Sparky’s age.

 Result Varable:

 Sparky’s age in dog years.

 Result to Print:

 “Sparky is X human years old which is X in dog years.
*/

var humanYears = 1; // defines how a human year to a dog year
var dogYears = 7; //defines actual dog years to human year

var sparkysAge = humanYears * dogYears; //multiplys human years to dog years to get how hold dog is in human years

var result = "Sparky is" + " "  + sparkysAge + " " + "human years old which is" + " " + dogYears + " " + "in dog years";//actual to print

console.log(result);// prints results

