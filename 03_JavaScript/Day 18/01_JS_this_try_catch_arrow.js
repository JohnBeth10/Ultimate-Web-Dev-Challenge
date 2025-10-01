// // this
// const student={
//     name: "John Bethlehem Pallan",
//     age: 20,
//     eng: 94,
//     maths: 98,
//     phy: 97,
//     avg(){
//         console.log(this);
//         let average = (this.eng + this.maths + this.phy)/3;
//         return average;
//     }
// }
// function avg(){
//     console.log(this);
// }

// // try-catch
// console.log("hello");
// console.log("hello");
// console.log("hello");
// try{
//     console.log(a);
// }
// catch(err){
//     console.log("Caught an error... a is not defined.");
//     console.log(err);
// }
// console.log("hello");
// console.log("hello");
// console.log("hello");

// // Arrow Functions
// const sum = (num1,num2)=>{
//     return num1+num2;
// }

// const cube=(n)=>{
//     let cubeNum = n*n*n;
//     return cubeNum;
// }

// const pow = (n1,n2) => (
//     n1**n2
// );

// // set timeout
// console.log("Hi there");
// setTimeout(()=>{
//     console.log("John's website");
// },3000);
// console.log("Welcome to");

// // set interval
// console.log("My name is: ");

// let id = setInterval(()=>{
//     console.log("People call me JOHNNY");
// },1500);

// console.log(id);
// console.log("John Bethlehem Pallan");

// this in Arrow and this in functions
const std={
    name:"john",
    class:"CSBS",
    prop:this,
    getname: function (){
        console.log(this);
        return this.name;
    },
    getMarks:() => {
        console.log(this);
        return this.marks;
    },
    getInfo1: function (){
        setTimeout(function (){
            console.log(this);
        },2000) 
    },
    getInfo2: function (){
        setTimeout(()=>{
            console.log(this);
        },2000)
    }
}

// arrow fn that returns sq of a fn
sqrt = (n)=>(Math.sqrt(n));

// setInterval clearInterval setTimeout application
let idNew = setInterval(()=>{
    console.log("Hello world!");
},2000);
setTimeout(()=>{
    clearInterval(idNew);
},10000)