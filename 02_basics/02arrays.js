const arr = new Array(1,2,3,4,5)
const anoArr = new Array(6,7,8);

console.log(arr)
console.log(anoArr)

//merge two arrays 

console.log(arr.concat(anoArr)) //[1, 2, 3, 4, 5, 6, 7, 8] or Combines two or more arrays. This method returns a new array without modifying any existing arrays.

const newArr = [...arr,...anoArr] //using spread of operator
console.log(newArr) //[1, 2, 3, 4, 5, 6, 7, 8]

arr.push(anoArr) //print [ 1, 2, 3, 4, 5, [ 6, 7, 8 ] ]
const anoNewArr = arr.flat(Infinity); //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(anoNewArr) //[1, 2, 3, 4, 5, 6, 7, 8]

console.log(Array.isArray("Piyush")) //check given arugument is array or not
console.log(Array.from("Piyush")) //Creates an array from an iterable object [ 'P', 'i', 'y', 'u', 's', 'h' ]
console.log(Array.from({name: "Piyush"})) //Creates an array from an iterable object.

console.log(Array.of(1,2,3,4,5)); //Returns a new array from a set of elements.







