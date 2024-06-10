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


const getTheTitles = () => {

    const myArray = books.map((book) => {
        return book.title;
    });

      return myArray;

};

// Do not edit below this line
module.exports = getTheTitles;
