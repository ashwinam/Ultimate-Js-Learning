alert('lets Run!')

let first = document.getElementById('first')

// Insert Adjacent Html, Text and Element
/*
 this method is used to insert html the first parameter is a code word specifying where to insert, must be one of the following:

*/


first.insertAdjacentHTML('beforebegin', '<div>Lets add this beforebegin.</div>')
// Insert html before the element.
first.insertAdjacentHTML('beforeend', '<div>Lets add this beforeEnd of the div.</div>')
//Insert html before the end of the div element like(</div>)
first.insertAdjacentHTML('afterbegin', '<div>Lets add this afterbegin of the div.</div>')
// Insert the element after the begin of the div like(<div>)
first.insertAdjacentHTML('afterend', '<div>Lets add this afterend of the div.</div>')
// Insert the element after the end of the div.



// first.remove()
// remove the node