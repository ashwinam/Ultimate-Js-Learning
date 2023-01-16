console.log('Hello world');

console.log(document.getElementsByTagName('p')[0]);
// Console.log shows the element dom tree
console.dir(document.getElementsByTagName('p')[0]);
// dir function shows the element as an object with its properties

// Tag name/Node Name
console.log(document.body.firstElementChild.tagName);
//return tag name if its element else it return undefined
console.log(document.body.firstChild.nodeName);
// it return every node(#text, comment etc.)

//innerHtml & outerHtml

// document.getElementsByClassName('lorem')[0].innerHTML = '<strong>Hello World again and remove ugly lorem ipsum</strong>';
// the innerHtml property helps to get the html inside the element(Valid for element nodes only)


// document.getElementsByClassName('lorem')[0].outerHTML = '<p>This is p tag</p>'
// outerHtml helps to get the element itself along with inner html

//innerHtml is only valid for element nodes only for other nodes type we can use node value or data.

console.log(document.body.firstChild.nodeValue);
console.log(document.body.firstElementChild.data);

console.log(document.body.textContent);
// provide access to the text inside the element only text, minus all tags

// the hidden attrubute
// false the hidden attribute
document.getElementsByTagName('strong')[0].hidden = false
// the hidden attribute and the dom property specifies whether the element is visible or not.
