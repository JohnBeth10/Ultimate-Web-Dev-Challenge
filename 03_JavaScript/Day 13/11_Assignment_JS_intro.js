// Question 1

let num = 14501;
if(num%10==0){
    console.log(`The number ${num} is good number as it is divisible by 10`);
}
else{
    console.log(`The number ${num} is not a good as it is not divisible by 10`);
}

// Question 2

let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");
let fullName = `${firstName} ${lastName}`;
let age = prompt("Enter your age");
alert(`${fullName} is ${age} years old.`);

// Question 3

let quarter = 4;

switch(quarter){
    case 1:
        console.log("Months in quarter 1 are Janury, February and March");
        break;
    case 2:
        console.log("Months in quarter 2 are April, May and June");
        break;
    case 3:
        console.log("Months in quarter 3 are July, August and September");
        break;
    case 4:
        console.log("Months in quarter 4 are October, November and December");
        break;
    default:
        console.log("You have entered the wrong quarter no.");
}

// Question 4

let str = "apples";
if((str[0]==='a'||str[0]==='A')&&str.length>5){
    console.log(`${str} is a golden string`);
}
else{
    console.log(`${str} is not a golden string`);
}

// Question 4

let num1=3;
let num2=4;
let num3=5;

if(num1>num2){
    if(num1>num3){
        console.log(`${num1} is greatest`);
    }
}
else if(num2>num3){
    console.log(`${num2} is greatest`);
}
else{
    console.log(`${num3} is greatest`);
}

// Question 4 (Bonous)

let numA = 2;
let numB =345423;

if(numA%10==numB%10){
    console.log(`Last digit of both ${numA} and ${numB} are same`);
}
else{
    console.log(`Last digit of both ${numA} and ${numB} are not the same`);
}