// JavaScript Movie Ticket Price | Robert Dunn | Conditionals Worksheet | 10-14-13

/* Movie Ticket Price

 The local movie theater in town has a ticket price of $12.00 but if you are a senior (55 and older), under 10 you get the discounted price of $7.00. In addition, if a customer is seeing a movie between 3pm and 5pm they can also get the discounted price.
 Determine which of the two prices the customer is eligible for.

 Given:
 Time of Movie (Assume whole numbers here)
 Age of the customer

 Result To Print Out:
 “The ticket price is X”

 */

var timeOfMovie = 10;
var ageOfCustomer = 11;
var ticketRegular = 12.00;
var discount = 7.00;

if(ageOfCustomer >= 55 || ageOfCustomer <= 10) {
    console.log ("The ticket price is" + " " + discount);
}else {
    console.log ("The ticket price is" + " " + ticketRegular);
}
