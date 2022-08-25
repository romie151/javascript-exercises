const getTheTitles = function(obj) {
    let books = []
    for (const key in obj) {
        books.push(obj[key].title)
    }
    return books
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
]    
getTheTitles(books)
// Do not edit below this line
module.exports = getTheTitles;
