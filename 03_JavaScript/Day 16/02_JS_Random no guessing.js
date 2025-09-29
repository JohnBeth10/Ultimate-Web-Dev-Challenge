const maxNum = prompt("Enter the upper bound: ");

let guess = prompt("Guess the random no. generated: ");
let random = Math.floor(Math.random()*maxNum)+1;

while(true){
    if(guess == random){
        console.log("Congrats! You guessed the number. The no. was:",random);
        break;
    }
    else if(guess>random){
        guess = prompt("Wrong! look for a lower value");
    }
    else if(guess<random){
        guess = prompt("Wrong! look for a higher value");
    }
    else{
        guess = prompt("Enter a valid number!");
    }
}