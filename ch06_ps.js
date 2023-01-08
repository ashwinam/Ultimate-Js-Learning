//Q1: write a programme using prompt function to take input of age as a value from the user and use alert to tell him if he can drive or not.

let age = Number.parseInt(prompt('Enter you age: '))

if (age >= 18 ){
    alert('You can drive')
}
else{
    window.alert('You can\'t drive.')
}

// Q2: in q1 use confirm to ask the user if he wants to see the prompt again



age = Number.parseInt(prompt('Enter you age: '))

let isSure = confirm('Are you want to submit you option? ')

if (isSure){
    if (age >= 18 ){
        alert('You can drive')
    }
    else{
        window.alert('You can\'t drive.')
    }
}
else{
    age = Number.parseInt(prompt('Enter you age: '))
}


do{
    age = Number.parseInt(prompt('Enter you age: '))
    isSure = confirm('Are you want to submit you option? ')
    if(isSure){
    if (age >= 18 ){
            alert('You can drive')
        }
        else{
            window.alert('You can\'t drive.')
        }
    }


}while(!isSure)


// Q3: In the previous question use console.error to log the error if the age entered is negative

do{
    age = Number.parseInt(prompt('Enter you age: '));
    isSure = confirm('Are you want to submit you option? ');
    if(age < 0){
        console.error('You enetered a Invalid input.');
        break;
}else{
    if(isSure){
        if (age >= 18 ){
                alert('You can drive');
            }
            else{
                window.alert('You can\'t drive.');
            }
}
}


}while(!isSure);

//Q4: write a programme to change the url to google.com (redirection) if user enter a number greater than 4.

let userChoice = Number.parseInt(prompt('Enter the number of your choice: '))

if(userChoice > 4){
    location.href="https://google.com"
}

//Q5: change the background of the page to 'yellow, red' or any other color based on the user input through prompt

userChoice = prompt('Enter the color name of your choice: ')

if (userChoice){
    alert(userChoice);
    document.body.style.background = userChoice;
}else{
    alert('Give the proper input.');
}