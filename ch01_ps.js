// Q1. Create a variable of type string and try to add a number to it.

let str = 'ashwin'
let num = 65

console.log(str + num)


//Q2. Use typeof operator to find the datatype of the string in last question

console.log(typeof (str + num))

const obj = {
    name:'ashwin',
    education:'mcm',
    isPrinciple:false
}

console.log(obj);
obj = 45

//Answer is no

// Q4. Try to add a new key to the const object in problem 3 were you able to do it?

// two ways to access and modify key in object
obj['friend'] = 'ashish'
obj.currentPlace = 'vadodara' 
console.log(obj)

// Q5. write a js programme to create a word meaning dictionary of 5 words.

const dictOfWords = {
    metadata:'a set of data that describes and gives information about other data.',

    tenet:'a principle or belief, especially one of the main principles of a religion or philosophy.',
    technicalSupport:'a service provided by a hardware or software company which provides registered users with help and advice about their products.',
    cascade:'a process whereby something, typically information or knowledge, is successively passed on.',
    brief:'of short duration; not lasting for long.'
}

console.log(dictOfWords);