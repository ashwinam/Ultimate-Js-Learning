let arr = [1, 2, 3, 4, 5, 6, 7]

// 1. toString() --> Converts an array to an string of comma seperated values


console.log(arr);
console.log(arr.toString()); // '1,2,3,4,5,6,7'

//2. join() --> join all the elements in an array using a seperator.

arr = ['my', 'name', 'is', 'ashwin']

console.log(arr.join(" ")); // 'my name is ashwin'

//3. pop() --> pop removes last element from the arrays(its a inplace operation)

arr = [10, 12, 14, 16, 18]

a = arr.pop()

console.log(a, arr); // 18 --- [10, 12, 14, 16]

//4. push() --> add the new element to the end of the array

arr = [4, 6, 7, 9, 10]

a = arr.push() // a return length

console.log(a, arr); // 6 [4, 6, 7, 9, 10, 25]

// 5. shift() --> remove first element and return (in-place operation)

arr = [25, 26, 27, 28, 29, 30]

a = arr.shift()

console.log(a, arr); // 25 --- [26, 27, 28, 29, 30]

// 6. unshift() --> add first element into an array and return new array length

a = arr.unshift(25)

console.log(a, arr); // 6 --- [25, 26, 27, 28, 29, 30]

// Part 2
//7. delete() --> array element can be deleted using the default operator

arr = ['hello', 'i', 'am', 'not', 'hungry']

delatedElement = delete arr[3]
console.log(deletedElement, arr);

//8. concat() --> used to join arrays to the given arrays

let firstArr = ['hello', 'ashwin']
let secondArr = ['how', 'are', 'you?']

console.log(firstArr + secondArr);// normal concat using plus operator
// hello,ashwinhow,are,you?

console.log(firstArr.concat(secondArr)); // ['hello', 'ashwin', 'how', 'are', 'you?']
// return new array does not change existing array

// 9. sort() --> this method is used sort an array in a alphabetical manner not a asceding manner


arr = [8, 9, 6, 4, 5, 7, 4, 123, 23, 65, 33, 45]

arr.sort() // in place modification
console.log(arr);
// [123, 23, 33, 4, 4, 45, 5, 6, 65, 7, 8, 9] it thinks as alphabets not numbers

// how to do the ascending order sort
// in sort we have to provide a extra function as an argument

// ex
function compare(a, b) {
    return a - b
}

arr.sort(compare);
console.log(arr); // [4, 4, 5, 6, 7, 8, 9, 23, 33, 45, 65, 123]

// 10. reverse() --> just reverse the existing array

console.log(arr.reverse()); // [123, 65, 45, 33, 23, 9, 8, 7, 6, 5, 4, 4]

// 11. splice() --> this method is used to add  new item to the array and remove item as well (in-place modification.)

/* splice take 4 arguments
1. position to add
2. no of elements to remove
3. after that elements to be added and item need to be comma seperated
*/

arr.splice(5, 3) // removed item in a array [9, 8, 7]
console.log(arr); // [123, 65, 45, 33, 23, 6, 5, 4, 4]

// adding item using splice
arr.splice(0, 2, 1025, 1026)

console.log(arr); // [1025, 1026, 45, 33, 23, 6, 5, 4, 4]


// 12. slice takes out part of it from array and return a copy of an array

arr.slice(2); // [1025, 1026, 45, 33, 23, 6, 5, 4, 4]

arr.slice(2, 5); // [1025, 1026, 45]



