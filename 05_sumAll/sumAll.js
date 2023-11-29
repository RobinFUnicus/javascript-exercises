const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0) return "ERROR";
    if(typeof num1 !== "number" || typeof num2 !== "number") return "ERROR";
    
    let minNum = 0;
    let maxNum = 0;
    let sum = 0;

    if(num1 <= num2){
        minNum = num1;
        maxNum = num2;
    }else{
        minNum = num2;
        maxNum = num1;
    }

    for(let i = minNum; i <= maxNum; i++){
        sum += i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
