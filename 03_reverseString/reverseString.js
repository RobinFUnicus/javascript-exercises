const reverseString = function(phrase) {
    let charray = Array.from(phrase);
    charray = charray.reverse();
    let string = charray.join("");
    return string
};

// Do not edit below this line
module.exports = reverseString;
