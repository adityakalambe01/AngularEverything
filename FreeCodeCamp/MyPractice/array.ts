let numArray: number[] = [1,2,3,4,5];

let result:number[] = numArray.filter(num => num>2);

console.log(result);

let findNumber = numArray.find(num => num===2);
console.log(findNumber);

let sumOfnumbers = numArray.reduce((first, number) => first + number);
console.log(sumOfnumbers);


//Enum's
const enum Color{ //Const Enum will trim some bytes frm production system
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue;

console.log(c);


enum Month{ //This Enum will not trim some bytes in production deployment
    JAN,
    FEB,
    MAR,
    APR,
    MAY,
    JUN,
    JUL,
    AUG,
    SEPT,
    OCT,
    NOV,
    DEC
}

console.log(Month.DEC);



//Tuples
let swapNumbers: [number, number];

function swapNumberFunction(number1:number, number2:number): [number,number]{
    return [number2, number1];
}

swapNumbers = swapNumberFunction(10,20);

swapNumbers[0];
swapNumbers[1];

let num:[number, number] = [10,20]; 