const findTheOldest = function(arr) {
    let oldest = 0
    let person = {}
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].yearOfDeath) {
            arr[i]["yearOfDeath"] = new Date().getFullYear()
        }
        if (oldest < (arr[i].yearOfDeath - arr[i].yearOfBirth)) {
            oldest = arr[i].yearOfDeath - arr[i].yearOfBirth
            person = arr[i]
        }
    }
    // console.log(person)
    return(person)
    
};

const people = [
    {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
]

findTheOldest(people)
// Do not edit below this line
module.exports = findTheOldest;
