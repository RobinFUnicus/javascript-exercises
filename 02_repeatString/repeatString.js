const repeatString = function(stringToRepeat, numTimesRepeated) {
    if(numTimesRepeated < 0){
        return 'ERROR';
    }
    
    let repeatedString = '';
    
    for(i=0; i<numTimesRepeated; i++){
        repeatedString += stringToRepeat;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
