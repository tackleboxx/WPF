// JavaScript Slice of pie part 1 | Robert Dunn | Expressions Worksheet | 10-9-13

/*A bunch of students are having a party and somebody ordered pizza. Create an expression that calculates how much pizza each partygoer will get at the party.  (Assume all pizzas have the same number of slices and that the person dividing the pizza is really precise, so this can be a decimal, like 3.52 slices, etc.)
     Given:

    Number of slices per pizza
    Number of people at the party
    Number of pizzas ordered.

     Result Variables:

    Number of slices per person. (Can be a decimal or floating point).

    Result to Print:

    “Each person ate X slices of pizza at the party.”
*/

var slices = 8; // defines how many slices of pizza
var people = 24; //defines how many people at party
var pizzaOrderd = 5; // how many pizzas were bought

var slicePerPerson = slices * pizzaOrderd/people; //multiplys slices and pizzas orderd then divides by people to figure out how many slices each person has

var result = "Each person ate" + " " + slicePerPerson + " " + "slices of pizza at the party"//actual to print

console.log(result);// prints results

