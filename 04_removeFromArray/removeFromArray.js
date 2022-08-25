const removeFromArray = function(arr, ...args) {
    let newArr = arr.filter(ele => !args.includes(ele))
    return(newArr)
}

removeFromArray([1, 2, 3, 4], 3)
// Do not edit below this line
module.exports = removeFromArray;
