let a = 5, b = 6;


//if-else if-else statement

if (a > b) {
    console.log(`${a} is greater than ${b}.`)
}
else if (a < b) {
    console.log(`${b} is greater than ${a}.`)
}
else {
    console.log(`${a} and ${b} are equal.`)
}


/*
Falsy values : 
    0, -0, BigInt: 0n, "", null, undefined, NaN
Truthy values :
    "0", 'false', " ", [], {}, function(){}
*/

let email = "";

if (email) {
    console.log("Got user email.")
}
else {
    console.log("Don't have user email.")
}

let object = {};

if (Object.keys(object).length === 0) {
    console.log("Object is empty.")
}

/*
Nullish Coalescing Operator (??) : 
    It is used to handle the null and undefined situation.
    Syntax : null/undefined ?? value
*/

let val = null ?? 5;
console.log(val); //5

let val2 = undefined ?? 10;
console.log(val2); //10

let val3 = null ?? undefined ?? 10 ?? 20;
console.log(val3); //10

/*
Terniary Operator
    Syntax : (conditions) ? true : false
*/

(a >= b) ? console.log(`${a} is greater than ${b}.`) : console.log(`${b} is greater than ${a}.`)


