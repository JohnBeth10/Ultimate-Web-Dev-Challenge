// question 1

let arrNum = [1,2,3,4,5,6,7,8,9,10];

let arrNumAvg = (arrNum)=>{
    let sum =0;
    for(let i =0; i<arrNum.length; i++){
        sum+=arrNum[i];
    }
    let avg = sum/arrNum.length;
    return avg;
}
console.log(arrNumAvg(arrNum));

// question 2
let isEven = (num)=>{
    if(num%2==0){
        return "It is even";
    }
    else{
        return "It is not even";
    }
}

// question 3
const object={
    message: 'Hello world',
    logMessage(){
        console.log(this.message);
    }
}

setTimeout(()=>{
    object.logMessage();
},2000);