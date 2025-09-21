// //for loop

// for(let i=1; i<=5; i++){
//     console.log(i);
// }

// for(let i=10; i>=1; i=i-3){
//     console.log(i);
// }

// // odd nos till 15

// console.log("Forward");
// for(let i=1; i<=15; i+=2){
//     console.log(i);
// }
// console.log("Backward");
// for(let i=15; i>=1; i-=2){
//     console.log(i);
// }

// // Multiplication table

// let n =  prompt("Enter a number: ");
// n = parseInt(n);
// for(let i =n; i<=n*10; i+=n){
//     console.log(i);
// }

// // nested loops

// for(let i=1; i<=3; i++){
//     console.log(`outer loop ${i}`);
//     for(let j =0; j<=3; j++){
//         console.log(j);
//     }
// }

// while loop

// let i = 0;
// while(i<5){
//     console.log(i);
//     i++;
// }

// // guessing fav movie

// const favMovie = "avengers";

// let guess = prompt("Guess my fav movie. type quit to exit the game");

// while(guess!==favMovie){
//     if(guess === "quit"){
//         console.log("You lost by quitting");
//         break;
//     }
//     else{
//         guess = prompt("Wrong, please try again...");
//     }
// }
// if(guess===favMovie){
//     console.log(`Congrats, you have successfully guessed the movie - ${favMovie}.`)
// }

// // student info - double for loop

// let student = [["john",98],["nitin",100],["abhijith", 99]];

// for(let i = 0; i<student.length ; i++){
//     console.log(`Info of student ${i+1}`)
//     for(let j=0; j<student[i].length; j++){
//         console.log(j, student[i][j]);
//     }
// }

// // for of loop

// let heroes = [['superman','spiderman','batman'] ,['thor','daredevil', 'blackpanther']];
// for(list of heroes){
//     for(hero of list){
//         console.log(hero);
//     }
// }

// todo - using js

let list = [];

while(true){
    let choice = prompt("Please enter your request: ");

    if(choice === 'quit'){
        console.log("Quitting program");
        break;
    }
    else if(choice === 'list'){
        console.log("-----------------------");
        for(let i=0; i<list.length; i++){
            console.log(i, list[i]);
        }
        console.log("-----------------------");
    }
    else if(choice === 'add'){
        let add = prompt("Enter the task to be added: ");
        list.push(add);
        console.log(`${add} - task added`);
    }
    else if(choice === 'delete'){
        let idx = parseInt(prompt("Enter the index to delete the element"));

        console.log(`Deleted ${list[idx]}`);
        list.splice(idx,1);
    }
    else{
        console.log("Wrong input!");
    }
}
