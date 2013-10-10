// JavaScript Slice of pie part 2 | Robert Dunn | Expressions Worksheet | 10-9-13

/* At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the slices have been divided up evenly among the guests. Assume guests get whole slices, how many whole slices will Sparky feast on?

Example data set: 10 people, 4 pizzas and 8 slices per pizza will mean each person eats 3 slices and Sparky gets 2 slices. (Note that this is an example, your code should work and give me the accurate results no matter what numbers I put in for those given variables.)
     Given:

    Don’t make new given variables/constants for this. Instead use the givens you set up for Slice of Pie I.

     Result Variables:

    Number of slices Sparky gets to eat.

    Result to Print:

    “Sparky got X slices of pizza.”
*/

var slices = 8; // defines how many slices of pizza
var people = 24; //defines how many people at party
var pizzaOrderd = 5; // how many pizzas were bought

var slicePerPerson = slices * pizzaOrderd/people; //multiplys slices and pizzas orderd then divides by people to figure out how many slices each person has
var sparkysSlices = .67;
var sparkysPizza = slices * pizzaOrderd/sparkysSlices;
var result = "Sparky got" + " " + sparkysPizza + " " + "slices of pizza";//actual to print

console.log(result);// prints results

