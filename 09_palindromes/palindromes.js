const palindromes = function (potPali) {
    let charray = Array.from(potPali);
    charray.reverse();
    newString = charray.join("");
    return newString == potPali;
};

// Do not edit below this line
module.exports = palindromes;
