const sumAll = function(int1, int2) {
    let sum = 0

    if (((typeof(int1) === 'number') && (int1 >= 0)) && (typeof(int2) === 'number') && (int2 >= 0)) {
        if (int1 < int2) {
            for (let i = int1; i <= int2; i++) {
                sum += i
            }
        } else if (int1 > int2) {
            for (let i = int2; i <= int1; i++) {
                sum += i
            }
        } 
        return(sum)
    } else {
        return('ERROR')
    }
    
    
    
};

sumAll(123, 1)
// Do not edit below this line
module.exports = sumAll;
