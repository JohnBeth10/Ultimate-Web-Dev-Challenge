// Question 1
// 
// let arr = [1,2,3,4,5,6,7,8,9,2,10];
// let num = parseInt(prompt("Enter the no. to delete from the array: "));
// let idx;
// while((idx = arr.indexOf(num))!==-1){
// arr.splice(idx,1);
// }
// console.log(arr);

// Question 2

// let num = 898997889;
// let count =0;
// let cpy = num;

// while(cpy>0){
//     count++;
//     cpy = Math.floor(cpy/10);
// }
// console.log(count);

// Question 3

// let num = 287152;
// let sum = 0;
// let digit = 0;

// while(num>0){
//     digit = num%10;
//     sum += digit;
//     num = Math.floor(num/10);
// }
// console.log(sum);

// Question 4

// let num = parseInt(prompt("Enter the no to find its factorial: "));
// let factorial = 1;
// for(let i =1; i<= num; i++){
//     factorial*=i;
// }
// console.log(factorial);

// Question 5

let arrNum = [1,2,3,4,5,99,489,7,49,3899,78965,58,378,37,904];
let largest =0;
for(let i=0;i<arrNum.length;i++){
    if(largest<arrNum[i]){
        largest = arrNum[i];
    }
}
console.log(largest);