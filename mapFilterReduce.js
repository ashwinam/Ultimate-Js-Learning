// higher order array methods
// Map() --> mapping a functionality to each item that exist in the array and return a new array

let array = [5, 7, 6, 4, 3]

let newArr = array.map((val, ind) => {
    return val + ind
})

console.log(newArr); // [5, 8, 8, 7, 7]
// it looks like a forEach but map return a new array

// filter() --> this method return a new array if the element return true

// filter the only positive integers

function positiveValues(a) {
    if (a) {
        return a
    }
}

let arr2 = [5, 8, 6, 0, 4, 0, 6, 2]

let newArr2 = arr2.filter(positiveValues);
console.log(newArr2);
// [5, 8, 6, 4, 6, 2]

// reduce() --> reduce an array to a single value

let arr3 = [25, 15, 35, 95, 75, 85, 65, 45, 55]

let newArr3 = arr3.reduce((item, item1) => {
    return item + item1
})

console.log(newArr3);
