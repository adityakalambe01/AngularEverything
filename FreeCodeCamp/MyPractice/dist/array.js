"use strict";
let numArray = [1, 2, 3, 4, 5];
let result = numArray.filter(num => num > 2);
console.log(result);
let findNumber = numArray.find(num => num === 2);
console.log(findNumber);
let sumOfnumbers = numArray.reduce((first, number) => first + number);
console.log(sumOfnumbers);
let c = 2 /* Blue */;
console.log(c);
var Month;
(function (Month) {
    Month[Month["JAN"] = 0] = "JAN";
    Month[Month["FEB"] = 1] = "FEB";
    Month[Month["MAR"] = 2] = "MAR";
    Month[Month["APR"] = 3] = "APR";
    Month[Month["MAY"] = 4] = "MAY";
    Month[Month["JUN"] = 5] = "JUN";
    Month[Month["JUL"] = 6] = "JUL";
    Month[Month["AUG"] = 7] = "AUG";
    Month[Month["SEPT"] = 8] = "SEPT";
    Month[Month["OCT"] = 9] = "OCT";
    Month[Month["NOV"] = 10] = "NOV";
    Month[Month["DEC"] = 11] = "DEC";
})(Month || (Month = {}));
console.log(Month.DEC);
//Tuples
let swapNumbers;
function swapNumberFunction(number1, number2) {
    return [number2, number1];
}
swapNumbers = swapNumberFunction(10, 20);
swapNumbers[0];
swapNumbers[1];
let num = [10, 20];
