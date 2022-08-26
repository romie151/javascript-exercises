const caesar = function(str, num) {
    let cypher = []
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lower = "abcdefghijklmnopqrstuvwxyz"

    if(num > 26) {
        num = num % 26
    }
    for (let i = 0; i < str.length; i++) {
        if ( !upper.includes(str[i]) && !lower.includes(str[i])) {
            cypher.push(str[i])
        } else if (upper.includes(str[i])){
            for(let j = 0; j < upper.length; j++) {
                if (str[i] === upper[j]) {
                    if((j + num) >= 26) {
                        cypher.push(upper[(j+num)% 26])
                    } else if ((j + num) <= 0){
                        cypher.push(upper[26 + (j + num)])
                    } else {
                        cypher.push(upper[j + num])
                    }
                }
            }
        } else if (lower.includes(str[i])) {
            for(let j = 0; j < lower.length; j++) {
                if (str[i] === lower[j]) {
                    if((j + num) >= 26) {
                        cypher.push(lower[(j+num)% 26])
                    } else if ((j + num) <= 0){
                        cypher.push(lower[26 + (j + num)])
                    } else {
                        cypher.push(lower[j + num])
                    }
                }
            }
        }
    }
    return cypher.join('')
};

// Do not edit below this line
module.exports = caesar;
