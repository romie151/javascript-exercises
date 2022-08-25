const palindromes = function (str) {
    let newString = str.split(/[\W+]/g).join('')
    let revStr = newString.split('').reverse().join('').replace(' ', '')
    if (newString.toLowerCase() === revStr.toLowerCase()) {
        return(true)
    } else {
        return(false)
    }
};

// Do not edit below this line
module.exports = palindromes;
