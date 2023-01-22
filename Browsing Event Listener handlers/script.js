

let btn = document.getElementById('btn')

let func1 = ()=>{
    alert('Hello World!');
}

btn.addEventListener('click', func1)

//we can add multiple event listener on a single element

btn.addEventListener('click', function(){
    console.log('Hello ashwin')
})

// removeEvent listener -> as the name says it removes the event

// for removing events the function object referrence need to be same
btn.removeEventListener('click', func1)


// The event object 
/* When an event happens, the browser creates an event object 
puts details into it and passes it as an argument to the handler
*/

btn.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    console.log(e.type, e.clientX, e.clientY);
})
