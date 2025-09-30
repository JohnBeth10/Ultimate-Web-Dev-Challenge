// question 1
let arr = [2, 5, 6, 7, 4, 5, 3, 8, 9];
let num = 4;

function reqNo(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      console.log(arr[i]);
    }
  }
}
reqNo(arr,num);

// question 2
let str = "abcdabcdefgggh";

function getUnique(str){
    let reqStr = "";
    for(let i=0; i<str.length; i++){
        if(reqStr.indexOf(str[i]) == -1){
            reqStr += str[i];
        }
    }
    return reqStr;
}
console.log(getUnique(str));

// question 3
country = ["Australia","Germany","UnitedStatesofAmerica","india","pakistan","france","belgium"];

function longestName(string){
    let reqCountryIndex = 0;
    for(let i= 0; i<string.length; i++ ){
        let reqCountryLength = string[reqCountryIndex].length;
        let currCountryLength = string[i].length;

        if(currCountryLength>reqCountryLength){
            reqCountryIndex = i;
        }
    }
    return string[reqCountryIndex];
}
console.log(longestName(country));

// question 4
let givenStr = "IamJohnBethlehemPallan";

function findVowelCount(givenStr){
    givStrLowerCase = givenStr.toLowerCase();
    let count =0;

    for(let i=0; i<givStrLowerCase.length; i++){
        if(givStrLowerCase[i]=='a'||
            givStrLowerCase[i]=='e'||
            givStrLowerCase[i]=='i'||
            givStrLowerCase[i]=='o'||
            givStrLowerCase[i]=='u'){
            count++;
        }
    }
    return count;
}
console.log(findVowelCount(givenStr));

// question 5
upperLimit = 89;
lowerLimit = 109;
function generateRandNo(upperLimit,lowerLimit){
    let difference = upperLimit-lowerLimit;
    let randomNo = Math.floor(Math.random()*difference)+lowerLimit;
    return randomNo;
}

console.log(generateRandNo(upperLimit,lowerLimit));