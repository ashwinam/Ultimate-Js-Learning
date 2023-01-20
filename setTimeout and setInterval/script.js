alert('Hello World.')

let a = setTimeout(function () {
    alert('From inside of setTimeout')
}, 2000)

clearTimeout(a) // used to cancel the execution

let b = setInterval(() => {
    alert('Inside of setInterval')
}, 3000);

clearInterval(b) // used to cancel the execution