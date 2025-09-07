// .trim() method
let name = "  John  ";
let newNameTrimmed= name.trim();
console.log(newNameTrimmed);

// toUpperCase() and toLowerCase() methods
let newNameUpper = name.toUpperCase();
console.log(newNameUpper);
let newNameLower = name.toLowerCase();
console.log(newNameLower);

// indexOf() method
let indexedPosition1 = name.indexOf('h');
let indexedPosition2 = newNameTrimmed.indexOf('h');
console.log(indexedPosition1);
console.log(indexedPosition2);

// method chaining
name="   John Beth     "
let newNameTrimmedUppercased = name.trim().toUpperCase();
console.log(newNameTrimmedUppercased);

// .slice() method
let hobby = "learning to code ";
let hobbySliced = hobby.slice(-4);
console.log(hobbySliced);

// .replace() and .repeat() methods
let hobbyReplaced = hobby.replace('to code','by coding');
console.log(hobbyReplaced);

let hobbyRepeated = hobby.repeat(5);
console.log(hobbyRepeated);

//Practice questions

// 1
let msg = "help   "
let msgEdited = msg.trim().toUpperCase();
console.log(msgEdited);

// 2
let name = "ApnaCollege";
let requiredName = name.slice(4);
console.log(requiredName);

let replacedRequiredName = requiredName.replace('l','t');
replacedRequiredName = requiredName.replace('l','t');
console.log(replacedRequiredName);

// OR (short using method chaining)
requiredName = name.slice(4).replace('l','t').replace('l','t');
console.log("Required name edited using method chaining: ",requiredName);