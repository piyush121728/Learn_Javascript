{
    var a = 10;
    let b = 20;
    const c = 30;
    console.table([a, b, c]);
}

a = 20;

console.log(a); //Not prefer to use var because it can access outside the scope. So, anybody outside the scope can change it value.
// console.log(b); //not accessible outside the scope
// console.log(c); //not accessible outside the scope

addOne(5); //accessible due to Hoisting 
//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
function addOne(nums) {
    return nums + 2;
}
addOne(4); //accessible

// addTwo(5) //Cannot access 'addTwo' before initialization
const addTwo = function (nums) {
    return addTwo + 5;
}

addTwo(5); //accessible
