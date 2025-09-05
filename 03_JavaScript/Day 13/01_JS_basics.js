// Printing output, initializing variables etc...

console.log("Hello, My name is John Bethlehem Pallan");
let a=10;
console.log(a);
let b = 15;
console.log("The sum is: "+(a+b)+ " \nThank you");
// -----------------------------------------------

// Need for using Template Literals

let pencilPrice = 10;
let eraserPrice = 5;

console.log("Total price is ",pencilPrice+eraserPrice, " Rupees");
let output = "The total price is "+(pencilPrice+eraserPrice)+" Rupees"; //lots of exta characters are needed

console.log(output);

// using Template Literals

output=`The total amount spent is ${pencilPrice+eraserPrice} Rupees only`; //`` tilde symbol along with the combination of ${} are used in this case
console.log(output);
// ------------------------------------------------------

// Conditional statements

let age = 3;
let minAge =18;
if(age>=minAge){
    console.log(`You are above ${minAge} so you can vote...`)
}
else{
    console.log(`You are below ${minAge} so you cannot vote...`)
}

    // pracice ques: Trafic light and rules associated

let currentLight = "green";

if(currentLight==="red"){
    console.log("STOP");
}
else if(currentLight==="yellow"){
    console.log("WAIT");
}
else if(currentLight==="green"){
    console.log("GO");
}

    // pracice ques: popcorn price

let size = "M";

if (size === "XL"){
    console.log(`The price for ${size} is 250 rupees`)
}
else if (size === "L"){
    console.log(`The price for ${size} is 200 rupees`)
}
else if (size === "M"){
    console.log(`The price for ${size} is 100 rupees`)
}
else if (size === "S"){
    console.log(`The price for ${size} is 50 rupees`)
}

    // pracice ques: Good string

let str = "aut";

if(str[0]==='a' && str.length>3){
    console.log(`${str} is a good string`);
}
else{
    console.log(`${str} is not a good string`);
}

    // pracice ques: Print day of the week using swich

let dayNo = 5;

switch(dayNo){
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("oops! wrong day");
}

    

// Alerts and Prompts

console.log("This is a log msg");
console.error("This is a error msg");
console.warn("This is a warning msg");

alert("This is a ALERT msg which is shown at the top and only be dismissed when the OK button is clicked");

let firstName = prompt("Enter your first name: ");
let lastName = prompt("Enter your last name: ");
let fullName = `Welcome ${firstName} ${lastName}!`;
alert(fullName);
console.log(fullName);