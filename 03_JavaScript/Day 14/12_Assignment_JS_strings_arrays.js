// Question 1

let arr1 = [7,9,0,-2];
console.log(arr1.slice(0,3));
console.log(arr1.slice(1));

// Question 2

let str1 = "";

if(str1.length == 0){
    console.log("Empty string");
}
else{
    console.log("Not an empty string");
}

// Question 3

let str2 = "JohNBeTh";
let idx = 1;
if(str2[idx]==str2[idx].toLowerCase()){
    console.log("Yes, it is in lower case");
}
else{
    console.log("NO, it is not in lower case");
}

// Question 4

let str3 = "   Johnbethpallan  "
console.log(str3.trim());

// Question 4
let months = ["january", "june" , "march" , "august"];
let element = "june";
if(months.includes(element)){
    console.log("the array incudes",element);
}
else{
    console.log("the array does not incude",element);
}