const findTheOldest = function(arr) {
    let oldest = 0
    let person = ''
    for (let i = 0; i < arr.length; i++) {
        if (oldest < (arr[i].yearOfDeath - arr[i].yearOfBirth)) {
            oldest = arr[i].yearOfDeath - arr[i].yearOfBirth
            person = arr[i].name
        } 

    }
    return(person)
    // console.log(person)
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
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
