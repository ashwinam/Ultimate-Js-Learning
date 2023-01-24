// Synchronous

let a = 23
alert(a)

let b = 'ashwin'
console.log(b); // here it will execute line by line

// Asynchronous

console.log('START')
setTimeout(() => {
    console.log('INSIDE async function');
}, 3000); // here it will hold the execution for 3 seconds and it executed rest of the script
console.log('END')