// Guess The Number

//Below code gemerate random number between 1 - 100
let randomNumber = Number.parseInt(Math.random() * 100)

let guesses = 0

let userGuess = Number.parseInt(prompt('Enter your guessed Number: '))

do{
    guesses += 1;
    if (userGuess > randomNumber){
        console.log('Oops... You Guessed it wrong, Please Guess the lower Number.');
    } else if (userGuess < randomNumber){
        console.log('Oops... You Guessed it wrong, Please Guess the higher Number.');
    } 
    userGuess = Number.parseInt(prompt('Enter your guessed Number: '))
}while (userGuess !== randomNumber)

if (userGuess === randomNumber) {
    console.log('Hurray...you guessed it right in a', guesses, 'guesses. and the remaining chances are ', (100 - guesses), '.');
}