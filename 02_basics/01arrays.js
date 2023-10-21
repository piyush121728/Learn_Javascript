// const arr = [1,2,3,4,5] 
const arr = new Array(1, 2, 3, 4, 5);
console.log(typeof arr); //data types : object
console.log(arr);

arr.push(6); //push the element at the end
console.log(arr);

arr.pop(6); //pop the element from end
console.log(arr);

arr.unshift(0); //shift the array's elements by one positions and push the element at the start
console.log(arr);

arr.shift(0); //pop the element at the start and shift the array's elements by one position
console.log(arr);

console.log(arr[2]) //access the arrays's element
console.log(arr.at(-1)); //access the array's element

console.log(arr.indexOf(3)); //print index of 3
console.log(arr.indexOf(19)); //print index of 10, if not found then print -1

console.log(arr.includes(3)); //print true if array contains 3
console.log(arr.includes(19)); //print false if array does not contains 19

console.log(arr.slice(2, 4)); //print array's element from index 2 to 4-1
console.log(arr); //[ 1, 2, 3, 4, 5 ]


console.log(arr.splice(2, 4)); //print and cut array's element from index 2 to 4-1
console.log(arr); //[ 1, 2 ]

const newArr = arr.join(); //convert array into string and element sperated by ','
console.log(typeof newArr +" : " + newArr) //string : 1,2












