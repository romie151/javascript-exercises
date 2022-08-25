const fibonacci = function(num) {
    let a = 0, b = 1, c = num;
    let arr = [b]
    for (let i = 1; i <= num; i++) {
      c = a + b;
      arr.push(c)
      return arr[num]
    }
    
};


// Do not edit below this line
module.exports = fibonacci;
