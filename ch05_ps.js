// Q1. create an array of numbers and take input from the user to add number this array.

let numArr = [12, 16, 78, 45, 66];
let num = Number.parseInt(prompt('Enter the Number of your choice: '));

numArr.push(num);
console.log(numArr);

// Q2. keep adding number to the array in 1 and until 0 is added to the array.

while(true){
    num = Number.parseInt(prompt('Enter the Number of your choice: '));
    if (num === 0){
        break;
    }
    numArr.push(num);
}

console.log(numArr);

//3. filter for numbers divisible by 10 from a given array

let arr = [10, 20, 40, 55, 33, 60, 90]

console.log(arr.filter((val) =>{
    return val % 10 === 0
})); // [10, 20, 40, 60, 90]

// Q4. create an array of square of a number

console.log(arr.map((val) => {
    return val * val
})); // [100, 400, 1600, 3025, 1089, 3600, 8100]

// Q5. use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calculated.)

arr = [1, 2, 3, 4, 5, 6]

let factorial = (val1, val2) =>{
    return val1 * val2
}

console.log(arr.reduce(factorial));