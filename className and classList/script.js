alert('welcome, back!')

let first = document.getElementById('first')

first.className = 'skyBlue textDark'

console.log(first.classList);

// first.classList.remove('textDark')


first.classList.add('brown')


first.classList.toggle('brown') // toggle--> if on then off, if off then on

console.log(first.classList.contains('brown'));

