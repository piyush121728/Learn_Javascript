let num = 1234596857;
console.log(num.toExponential(2)); //convert the number into exponential form (1.23e+4)
console.log(num.toFixed(3)); //fixed the decimal upto
console.log(num.toString()); //convert number into string
console.log(num.toLocaleString()); //convert number into string in each every three char seperated by ','. Ex :  1,234,596,857
console.log(num.toPrecision(3));

console.log(Number.MIN_VALUE); //min value of integer
console.log(Number.MAX_VALUE); //max value of integer
console.log(Number.MIN_SAFE_INTEGER); //min safe value of integer
console.log(Number.MAX_SAFE_INTEGER); //max safe value of integer


//Math library
console.log("Maths : ")

console.log(Math.abs(-4));
console.log(Math.ceil(2.4));
console.log(Math.floor(2.6));
console.log(Math.round(2.4));
console.log(Math.round(2.5));
console.log(Math.max(2, 4, 2));
console.log(Math.min(4, 5, 4));
console.log(Math.pow(2, 5));
console.log(Math.sqrt(4));

//Formula to generate number between 1 to 9
console.log(Math.floor(Math.random() * 10) + 1);

//Formula to generate number between given range
let min = 10, max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)








