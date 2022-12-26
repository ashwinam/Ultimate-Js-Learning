// Q1. write a program to print the marks of the student in an object using for loop

let obj = {
    'rohan': 80,
    'yuvraj': 60,
    'prateek': 100
}

for (let i = 0; i < Object.keys(obj).length; i++) {
    console.log(Object.keys(obj)[i], Object.values(obj)[i]);
}


// Q2: write a program in Q1 using for loop

for (let i in obj) {
    console.log(i, obj[i]);
}

//Q3: write a program to print 'try again' until the user enter the correct number

let usr_input = Number.parseInt(prompt('Enter the number: '))

while (1) {
    usr_input = Number.parseInt(prompt('Enter the number: '))
    if (usr_input !== 25) {
        console.log('try again');
    } else {
        break;
    }
}

// Q4: write a function to get the mean of 5 numbers

function mean(n1, n2, n3, n4, n5){
    console.log((n1 + n2 + n3 + n4 + n5)/5)
}

mean(1, 2, 3, 4, 5)

const mean = (n1, n2, n3, n4, n5)=>{
    console.log((n1 + n2 + n3 + n4 + n5)/5)
}
mean(1, 2, 3, 4, 5)
