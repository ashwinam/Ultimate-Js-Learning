// Q1: Use logical operator to find whether the age of a person lies between 10 and 20?

let age = parseInt(prompt('Enter your age: '))
alert(typeof age)
if (age > 10 && age < 20){
    console.log('Your age is between 10 and 20')
} else {
    alert(age)
}

// Q2: Demonstrate the use of switch case statements in js.

switch (age) {
    case 12:
        console.log('Your age is 12');
        break;
    case 13:
        console.log('Your age is 13');
        break;
    case 14:
        console.log('Your age is 14');
        break;
    case 15:
        console.log('Your age is 15');
        break;
    default:
        console.log('Your age is not special.')
        break;
}

// Q3: Write a javascript program to find whether a number is divisible by 2 and 3.

let num = 50;

if (num % 2===0 && num % 3===0){
    console.log('The number is divisible by 2 and 3.');
}else {
    console.log('number is not divisible by 2 and 3.');
}

//Q4: write a javascript program to find whether a number is divisible by either 2 or 3.

let nums = 50;

if (num % 2===0 || num % 3===0){
    console.log('The number is divisible by 2 and 3.');
}else {
    console.log('number is not divisible by 2 and 3.');
}

//Q5: print 'you can drive' or 'you cannot drive' based on age being greater than 18 using ternary operator

let a = 17

console.log('you', (a >= 18 ? 'can drive': 'cannot drive.'))