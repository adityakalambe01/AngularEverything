"use strict";
function addTwoNumbers(number1, number2) {
    return number1 + number2;
}
console.log(addTwoNumbers(10, 20));
const multiply = (number1, number2) => number1 * number2;
console.log(multiply(10, 20));
function addThreeNumbers(num1, num2, num3 = 10) {
    console.log(num1 + num2 + num3);
}
addThreeNumbers(10, 20);
addThreeNumbers(10, 20, 30);
// Rest Parameter
function addAllNumbers(num1, num2, ...nums) {
    console.log(num1 + num2 + nums.reduce((a, b) => a + b, 0));
}
addAllNumbers(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
//Generic Return type
function getItems(items) {
    return Array().concat(items);
}
console.log(getItems([1, 2, 3, 4, 5, 6, 7]));
console.log(getItems(["1", "2", "3", "4", "5", "6", "7"]));
