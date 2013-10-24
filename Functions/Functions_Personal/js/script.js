// JavaScript Functions_Personal | Robert Dunn | 10-24-13

/* Functions Personal

 */

// Calculate my BMI

var height = prompt('How tall are you? (in feet)');
var weight = prompt('How much do you weigh? (in pounds)');
var bmiCalc = 703;

function calcBmi(h, w, b) {
    var bmi = (height * height) /weight * bmiCalc;
    return bmi;
}
console.log("My BMI is " + total);