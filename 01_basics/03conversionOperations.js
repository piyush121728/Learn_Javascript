let str = "33abc";

let num = Number(str);
// console.log(num);
// console.log(typeof num)

//"33" => 33
//"33abc" => NaN
//"true" => 1 or false => 0;
//null => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn)
// console.log(typeof booleanIsLoggedIn)

//"" => false;
//"Piysh" => true;
//0 => false or 1 or any => true;
//null => false;

//Sepical conversion
console.log(2 + "3"); //23
console.log("3" + 2); //32
console.log(2 + 2 + "3"); //43
console.log("3" + 2 + 3); //323
console.log("4" + 2 + 2 + "3"); //4223

