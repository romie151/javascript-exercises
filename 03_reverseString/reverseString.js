const reverseString = function(str) {
    let newStr = str.split('').reverse().join('')
    return newStr
};

reverseString('Hello')
// Do not edit below this line
module.exports = reverseString;
