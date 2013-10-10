// JavaScript Discounts | Robert Dunn | Expressions Worksheet | 10-9-13

/* Calculate the discounted price for an item. Create an expression that will calculate the discounted price with and without sales tax. (It is acceptable for the result to have more than two digits after the decimal. $345.896 for example.)
     Givens:

    Original price
    Discount percentage (20% would be 20, for example)
    Description of item
    Sales tax percentage

     Result Variables:

    Price of the item with tax
    Price of the item without tax

     Result to Print:

    “Your X was originally $X, but after a X% discount, it is now $X without tax, and $X with tax.”
*/

var groceries = [50, 75, 30, 100, 47];
var total = groceries[0] + groceries[1] + groceries[2] + groceries[3] + groceries[4];
var average = total/5;
var result = "You have spent a total of" + " " + total + " " + "on groceries over 5 weeks." + " " + "That is an average of" + " " + average + " " + "per week"
console.log(result);

