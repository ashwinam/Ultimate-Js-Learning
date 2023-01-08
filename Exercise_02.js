/*
Use javascript to create a game of snake water and gun, The game should ask you to enter s, w or g. the computer should be able to randomly generate s, w or g and declare win or loss using alert function use confirm and prompt wherever required.
*/

/*
Work flow of Snake gun and water
1. user gave the choice between s g or w:
2. computer gave the choice between s g or w (random generating option):
3. then after that goes by rules 
4. scenarios:
    a. snake vs water: snake drink water, so  --> snake wins
    b. snake vs gun: gun shoot on snake, so  --> gun wins
    c. water vs gun: gun drown in water, so  --> water wins
    d. if both are same then result will be draw.
*/

alert('WELCOME TO THE SNAKE, WATER AND GUN GAME. ');

//ask user input from choices

let uInput;

let compInput;
do {

uInput = prompt('Give your choice between this 3 options(S, G and W): ')

compInput = Number.parseInt(Math.random() * 3)+1

if(compInput === 1){
    compInput = 's';
}else if(compInput === 2){
    compInput = 'g';
}else{
    compInput = 'w';
}


if (uInput === 's' && compInput === 'w'){
    console.log(uInput, '<-->', compInput);
    alert(`Snake wins, user wins.`)
}else if(uInput === 's' && compInput === 'g'){
    console.log(uInput, '<-->', compInput);
    alert('Snake was shot by hunter(computer), computer wins.')
}else if(uInput == 'w' && compInput == 'g'){
    console.log(uInput, '<-->', compInput);
    alert('gun was drown in water, User wins.')
}else if(uInput === 'w' && compInput === 's'){
    console.log(uInput, '<-->', compInput);
    alert(`Snake wins, computer wins.`)
}else if(uInput === 'g' && compInput === 's'){
    console.log(uInput, '<-->', compInput);
    alert('Snake was shot by hunter(user), User wins.')
}else if(uInput == 'g' && compInput == 'w'){
    console.log(uInput, '<-->', compInput);
    alert('gun was drown in water, Computer wins.')
}else{
    console.log(uInput, '<-->', compInput);
    alert('Draw...')
}
}while(uInput === compInput);