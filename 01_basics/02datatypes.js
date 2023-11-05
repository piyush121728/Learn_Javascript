"use strict" //treat all js code as newer version

// alert("Hello Piyush") //we are using nodejs, not browser

//Primitive data type((value) : A primitive data type is predefined by the language and is named by a reserved keyword.
let name = "Piyush Kumar" //string
let rollNo = 166 //number
let x = BigInt("123456789012345678901234567890");
let student = true; //boolean
let stu = null; //standlone value or object
let batch; //undefined
let sym = Symbol("123")//symbol => unique key

console.log(typeof name);
console.log(typeof rollNo);
console.log(typeof x);
console.log(typeof student);
console.log(typeof stu);
console.log(typeof batch);
console.log(typeof sym);

//Non primitive data types (reference) : A non - primitive data type is predefined by the user

let arr = [1, 2, 3] //array
let obj = { //object
    o1: 1,
    o2: 2,
}
let func = function () {//function
    console.log(2 + 3);
}

console.log(typeof arr) //object
console.log(typeof obj) //object
console.log(typeof func) //function


//All the memory for primitive data type is allocated in stack memory
//All the memory for non-primitve data type is allocated in heap memory and its reference availabel in stack memory


/*
JavaScript is a dynamically typed language, which means that data types of variables are determined by the value 
hey hold at runtime and can change throughout the program as we assign different values to them.
*/
