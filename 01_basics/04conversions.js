console.log("2" >= 2); //true;
console.log("02" >= 2); //true;
console.log("2" > 2); //false
console.log("02" > 2); //false
console.log("2" <= 2); //true
console.log("02" <= 2); //true
console.log("2" > 2); //false
console.log("02" > 2); //false

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

console.log(undefined > 0) //false
console.log(undefined == 0) //false
console.log(undefined >= 0) //false

console.log(2=="2") //true : Here, value should be same
console.log(2==="2") //false : Here, type and data should be same