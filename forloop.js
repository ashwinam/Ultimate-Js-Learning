// quiz: write a for loop that gives odd number between 1 to 10

for(let i=0; i<=10; i++){
    if (i % 2 !==0){
        console.log(i)
    }
}


// for in loop
obj = {
    ashwin:12000,
    akash:27000,
    arth:20000,
    yuvraj:12000
}

for(let k in obj){
    console.log('The salary of ' + k + ' is ' + obj.k)
}

// for of loop
for (let iter of "ashwin"){
    console.log(iter)
}