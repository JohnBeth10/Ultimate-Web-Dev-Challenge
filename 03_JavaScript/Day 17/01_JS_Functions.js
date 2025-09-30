// print name
function printName(n){
    for(let i = 0; i<n;i++){
        console.log("John Bethlehem Pallan");
        console.log("MEC");
    }
}
printName(7);

// isAdult
function isAdult(age){
    if(age>=18){
        console.log("You are an Adult");
    }
    else{
        console.log("You are an NOT Adult");
    }
}
isAdult(4);

// dice roll - random no.
function diceRoll(){
    let num = Math.floor(Math.random()*6)+1;
    console.log(num);
}

for(let i=1; i<=6; i++){
    diceRoll();
}

// avg
function average(a,b,c){
    let avg = (a+b+c)/3;
    console.log(`The average of ${a}, ${b} and ${c} are ${avg}`);
}
average(2,3,4);

// multiplication table
function multiTable(n){
    for(let i=1;i<=10;i++){
        console.log(`${n} X ${i} = ${n*i}`);
    }
}
multiTable(5);

// using return
function sum(a,b){
    return a+b;
}
console.log(sum(3,5)); //this will give the final ans as 8
sum(2,5);  //this won't display anything

// cgpa calculation
function avgSgpaRequried(S1,S2,reqCgpa){
    let avgSgpa = ((6*reqCgpa)-S1-S2)/4;
    console.log(`The avg sgpa required from S3-S6 is ${avgSgpa}`)
}
console.log(`If i get 9 sgpa for S3-S6 then my cgpa is ${(7.53+8.05+(4*9))/6}`)
console.log(`If i get 9 sgpa for S3-S8 then my cgpa is ${(7.53+8.05+(6*9))/8}`)

// sum of elements from 1 to n
function sumNum(n){
    let sum=0;
    for(i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

// concat array
function concatArr(){
    let str = ["hi ","hello ","how ","are ","you."];
    let concatStr="";
    for(let i=0;i<str.length;i++){
        concatStr +=str[i]; 
    }
    return concatStr;
}

// lexical scope
function outerFunc(){
    let x=6;
    let y=7;

    function innerFunc(){
        console.log(x);
        console.log(y);
    }
    innerFunc();
}

// function expressions
let findSum = function(a,b){
    console.log(a+b);
}
findSum(9,8);

let greet= function(){
    console.log("hello");
}
greet();

// higher order functions
function multipleGreet(func,n){
    for(let i=1; i<=n;i++){
        func();
    }
}
multipleGreet(greet,200);

function oddOrEven(request){
    if(request == 'odd'){
        return function isOdd(n){ 
            console.log(n%2!=0);
        }
    }
    if(request == 'even'){
        return function isEven(n){
            console.log(n%2==0);
        }
    }
}
let request = 'odd';

// methods
const calculator={
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return(a-b);
    },
    mul: function(a,b){
        return(a*b);
    },
    div: function(a,b){
        return(a/b);
    }
}

