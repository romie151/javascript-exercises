function pigLatin(string) {
    let newWord = ""
    let vowels = "aeiou"
    if (vowels.split('').includes(string[0].toLowerCase())) {
        newWord = string + "ay"
    } else if (!vowels.split('').includes(string[0].toLowerCase()) && vowels.split('').includes(string[1].toLowerCase())) {
        let placeholder = string.split('').slice(1).join('')
        newWord = placeholder + string[0] + 'ay'
    } else if (!vowels.split('').includes(string[0].toLowerCase() && string[1].toLowerCase()) && vowels.split('').includes(string[2].toLowerCase())) {
        let placeholder = string.split('').slice(2).join('')
        newWord = placeholder + string[0] + string[1] + 'ay'
    } else if (!vowels.split('').includes(string[0].toLowerCase() && string[1].toLowerCase() && string[2].toLowerCase())) {
        let placeholder = string.split('').slice(3).join('')
        console.log(placeholder)
        newWord = placeholder + string[0] + string[1] + string[2] + 'ay'
    } else if (string.split('').includes('sch')) {
        let placeholder = string.split('').slice(3).join('')
        console.log(placeholder)
        newWord = placeholder + string[0] + string[1] + string[2] + 'ay'
    } else if (string.split('').includes('qu')) {
        let placeholder = string.split('').slice(3).join('')
        console.log(placeholder)
        newWord = placeholder + string[0] + string[1] + 'ay'
    }
    return newWord
    // console.log(newWord)
};

pigLatin('school')
pigLatin('banana')
// Do not edit below this line
module.exports = pigLatin;
