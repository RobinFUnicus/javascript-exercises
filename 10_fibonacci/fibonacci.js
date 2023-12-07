const fibonacci = function(indexOfFibo) {
    if(indexOfFibo < 0) return 'OOPS';
    let prevNum = 0;
    let prevPrevNum = 1;
    let currentNum = 0;
    for (let i = 0; i < indexOfFibo; i++) {
        currentNum = prevNum + prevPrevNum;
        prevPrevNum = prevNum;
        prevNum = currentNum;
    }
    return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
