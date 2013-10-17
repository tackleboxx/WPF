// JavaScript Conditionals_Personal | Robert Dunn | Conditionals Worksheet | 10-14-13

/* Can I buy a video game?

 */

var budget = 45; // Setting a budget for video game
var videoGame = 60; // actual video game price
var payCheck = 200; // money received from paycheck

if (budget === videoGame || payCheck >= videoGame) { // if budget equals price of video game or paycheck is greater or equal to video game, I get game
    console.log("You can get the game!");// print that I get game
}else { // otherwise
    console.log("You need more money!")// print i need more money
}