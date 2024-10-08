function addTwoNumbers(number1:number, number2:number):number{
    return number1+number2;
} 
console.log(addTwoNumbers(10,20));



const multiply = (number1:number, number2:number): number => number1*number2;
console.log(multiply(10,20));

function addThreeNumbers(num1: number, num2: number, num3:number =10){
    console.log(num1+num2+num3);
}

addThreeNumbers(10,20);
addThreeNumbers(10,20,30);


// Rest Parameter

function addAllNumbers(num1:number, num2:number, ...nums:number[]):void{
    console.log(
        num1+num2+nums.reduce((a,b)=> a+b,0)
    );
}
addAllNumbers(10,20,30,40,50,60,70,80,90,100);

//Generic Return type
function getItems<T>(items:T[]): T[]{
    return Array<T>().concat(items);
}

console.log(getItems<number>([1, 2, 3, 4, 5, 6, 7]));
console.log(getItems<string>(["1", "2", "3", "4", "5", "6", "7"]));