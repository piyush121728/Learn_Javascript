/*
    Filter loop: 
        Syntax : objectName( callbackFunction(){} )
        Filter loop returns filter object
*/

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


const fictionBook = books.filter((book) => (book.genre == "Fiction"));
console.log(fictionBook);

const editionBook = books.filter((book) => { return book.edition != 2010 });
console.log(editionBook);

/*
    Map loop:
        Syntax : objectName( CallbackFunction(){} )
        Map loop returns updated object;

*/

const nums = [1, 2, 3, 4, 5, 6]

const newNums = nums.map((num) => (num + 1));
console.log(nums);
console.log(newNums);

/* Nested higer order loops */

const newNumbers = nums.map((num) => num * 10).map((num) => num + 1).filter((num) => num > 50);
console.log(newNumbers);

/* 
    Reduce Loop :
        Syntax : objectName.reduce( callbackFunction(accumulator, currentValue){}, initialValue);
        Reduce Loop return accumulator value(i.e sum of all the element of array or object).
*/

const tot = nums.reduce((acc, num) => (acc + num), 0);
console.log(tot);

const product = [
    item1 = {
        name: "shampoo",
        price: 100,
    },
    item2 = {
        name: "oil",
        price: 200,
    },
    item3 = {
        name: "soap",
        price: 250,
    }
]

const totAmount = product.reduce((acc, item) => (acc + item.price), 0);
console.log(totAmount);

