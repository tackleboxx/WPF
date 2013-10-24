// JavaScript Functions_Personal | Robert Dunn | 10-24-13

/* Functions Personal

 */

// Calculate my BMI (body mass index)   

var height = prompt('How tall are you? (in inches)');// prompt for height
var weight = prompt('How much do you weigh? (in pounds)'); // prompt for weight
var bmiCalc = 703; // calculation for bmi
var total = calcBmi();//run total var

function calcBmi(h, w, b) {// start of function
    var bmi = weight/(height * height) * bmiCalc; // calculation for function
    return bmi; // return bmi
}

console.log("My BMI is " + total);// print to console