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