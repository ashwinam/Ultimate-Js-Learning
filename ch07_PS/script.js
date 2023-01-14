console.log('Hello from script js')

//Q 1: create a navbar and change the color of its first element to red

let firstLi = document.body.firstElementChild.firstElementChild.children[0] // children return all child element nodes

firstLi.style.color = 'red'

// Q2. create a table without tbody, now use view page source button to check whether it has tbody or not.

// After removing tbody it did not showing tbody

// Q3. create an element with 3 children Now change the color of first and last element to green

let thirdElem = document.body.children[2]
thirdElem.firstElementChild.style.color = 'green'
thirdElem.lastElementChild.style.color = 'green'

// Write a javascript code to change background color of all li tags to cyan

let allLi = document.getElementsByClassName('cyan')
allLi = Array.from(allLi)


// allLi.forEach(element => {
//     element.style.background = 'cyan'
// });

// for(let elem of allLi){
//     elem.style.background = 'blue'
// }


// Q5: which of the following is used to look for the farthest ancestor that matches a given css selector

/* a) matches b)closest c) contains d)None 
Answer is b closest 
*/