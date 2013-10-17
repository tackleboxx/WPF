// JavaScript Check the Login | Robert Dunn | Conditionals Worksheet | 10-14-13

/* Check the Login

 Make sure the user has the correct username and password. If the username doesn’t match then a specific message for that should be printed to the console. If the password doesn’t match a message should appear for that, etc. Only one error message should appear.

 Given:

 Username entered by user
 Password entered by user
 Correct username
 Correct password

 Result To Print Out:
 “Welcome, (place their username here)!”  - if the username and password is correct
 “User not found. Try again.” -if the username does not match
 “Password does not match our records.”  -if the username matches but the password does not

 */

var username = prompt('Username'); // username
var password = prompt('Password'); // password
var correctUsername = "Danny"; // correct username
var correctPassword = "Danny"; // correct password


if(username === correctUsername && password === correctPassword) { //if the username and password is correct
    console.log("Welcome," + " " + correctUsername + " " + "!");
}
if (username === correctUsername && password != correctPassword) { //if the username matches but the password does not
    console.log("Password does not match our records.");
}else if(username != correctUsername) {                             //if the username does not match
    console.log("User not found. Try again.");
}