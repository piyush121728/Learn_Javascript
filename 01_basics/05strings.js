let str = new String("Piyush kumar prasad");
console.log(str.length); //print the size of string
console.log(str.charAt(2)); //print char at index 2
console.log(str.at(-1)); //same as charAt but it also accept negative index as argument
console.log(str.indexOf('i')) //print index of char 'i'
console.log(str.toUpperCase()) //print string in upper case
console.log(str.toLowerCase()) //print string in lower case
console.log(str.substring(1,4))  //print the substring starting form index 1 to index 4-1
console.log(str.slice(-8,-5)) //same as substring but it also accept negative index as argument

let dupli = str.split(' ') //split the string ['piyush', 'kumar', 'prasad']
console.log(dupli[2]);

let name = "   piyush    ";
console.log(name.trim()); //trim start spaces and end spaces
console.log(name.trimStart()); //trim start spaces only
console.log(name.trimEnd()); //trim end spaces only

console.log(str.replace("kumar","kr")); //replace the kumar with kr