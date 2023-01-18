alert('Hello, Welcome back');

let a = document.getElementsByTagName('div')[0]

// a.innerHTML = a.innerHTML + '<h1>Hello World</h1>'

// we looked at some ways to insert elements in the DOM, here is another way.

let div = document.createElement('div');
div.innerHTML = '<h1>Adding div to the html</h1>';
// a.appendChild(div);
// a.append(div); Html inserted the next sibling side.

// append at the end of the node.

// a.prepend(div); // add start of the node. but inside container.

// a.before(div); // insert before node, before container

// a.after(div); // insert after the node, after container.


// a.replaceWith(div); // it exchange places with previous node with new node