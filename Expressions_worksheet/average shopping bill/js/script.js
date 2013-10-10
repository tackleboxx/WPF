// JavaScript Average Shopping Bill | Robert Dunn | Expressions Worksheet | 10-9-13

/* You are budgeting your money for the year and must calculate your average weekly grocery shopping spending over the past five weeks. Store the past five grocery totals as a list in an array. Create an expression that will use the items in the array to calculate the average amount spent on groceries.

Please note: there should only be one given for this problem set, the array holding the five weekly totals.  You should be able to access the array using the array access notation discussed earlier in the course.

     Givens:

    An array with five weekly grocery totals.

     Result Variable:

    Total amount spent on groceries.
    Average weekly grocery spending.

    Result to Print:

    “You have spent a total of $X on groceries over 5 weeks. That is an average of $X per week”
*/

var groceries = [50, 75, 30, 100, 47];
var total = groceries[0] + groceries[1] + groceries[2] + groceries[3] + groceries[4];
var average = total/5;
var result = "You have spent a total of" + " " + total + " " + "on groceries over 5 weeks." + " " + "That is an average of" + " " + average + " " + "per week"
console.log(result);

