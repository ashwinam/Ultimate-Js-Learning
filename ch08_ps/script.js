// Q1: write a programe to show different alerts when different buttons are clicked

// Q2: Create a website which is capable of storing Bookmarks of your favourite website using href

// Q3: Q2 using add event listener

let btns = document.getElementsByTagName('button')

Array.from(btns).forEach((element, indx) => {
    if (indx>5){
        // element.className = indx
        // console.log(element);
        if (indx == 6){
            element.addEventListener('click', function(){
                window.location = 'https://google.com'
            })}
        else if (indx == 7){
            element.addEventListener('click', function(){
                window.location = 'https://twitter.com'
            })}
        else if (indx == 8){
            element.addEventListener('click', function(){
                window.location = 'https://linkedin.com'
            })}
        }
    });
// Q4: Write a javascript programme to keep fetching contents of a website(every 5 seconds)

// setInterval(function () {
//     console.log(document.body.textContent);
// }, 3000)

// Q5: create a glowing bulb effect using classlist toggle method in javascript

setInterval(() => {
    bulb.classList.toggle('bulb-on')
}, 100);


// Harry bhai code
// document.getElementById("google").addEventListener("click", function() { 
//   window.location = "https://www.google.com";
// win.focus();

// })


// const fetchContent = async (url) => {
//   con = await fetch(url);
//   let a = await con.json()
//   return a;
// }

// setInterval(async function() {
//   let url = "https://jsonplaceholder.typicode.com/todos/1"
//   console.log(await fetchContent(url))
// }, 3000)



// setInterval(async function() {
//     document.querySelector("#bulb").classList.toggle("bulb")
//   }, 300)