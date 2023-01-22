let num = [25, 26, 78, 65, 45]

// classical loop
for(let i=0; i<num.length; i++){
    console.log(num[i]);
}

// forEach --> calls a function, once for each array element, it has three params item, indexes, arrays

num.forEach((a) => {
    console.log(a * a); // here each item in array i do the square
})

//array.from --> used to create an array from any other object(html collection, string etc.)

let name = 'ashwin'
Array.from(name); // ['a', 's', 'h', 'w', 'i', 'n']

// for ... of --> this loop is used to get the item from an array

for(let item of arr){
    console.log(item);
}

// for ...in --> this loop iterate the indexes from an array

for (let i in arr){
    console.log(i);
}
