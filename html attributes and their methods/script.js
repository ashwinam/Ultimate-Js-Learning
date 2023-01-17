console.log('We are here');

let first = document.getElementById('first')

console.log(first.hasAttribute('class'));
console.log(first.hasAttribute('style'));
// method for checks for existence of an attribute

console.log(first.getAttribute('class'));
// method used to get the value of an attribute


console.log(first.setAttribute('class', 'juping'));
// method used to set the value of an attribute

// console.log(first.removeAttribute('class'));
// method used to remove the value of an attribute

console.log(first.attributes);
// method return the attributes inside the tag

//data-* attributes --> helps to set the custom attributes

console.log(first.dataset);
console.log(first.dataset.name);
console.log(first.dataset.no);
// we can easily create custom attributes but the ones starting  with "data-" are reserved for programmers use. they are available in property named "dataset" 
