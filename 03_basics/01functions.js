//function declartion
function login(username = "Sonu")
{
    return `${username} logged in.`;
}

//function calling
const res = login();

console.log(res);

//use of rest operator as function parameter

function func(...nums)
{
    return nums;
}

function func1(num1, num2, ...nums)
{
    return nums;
}

console.log(func(10,20,30,40,50,60)); //print [ 10, 20, 30, 40, 50, 60 ]
console.log(func1(10,20,30,40,50,60)); //print [ 30, 40, 50, 60 ]

//passing object as argument to a function

const data = {username: "piyush", age:22,}

function info(data)
{
    return `${data.username} is ${data.age} years old.`;
}

console.log(info(data));

//passing array as argument to a function

const rollNos = [11,12,13,14];
function rollNo(rollNos)
{
    return rollNos[2];
}
console.log(rollNo(rollNos));
