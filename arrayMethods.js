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