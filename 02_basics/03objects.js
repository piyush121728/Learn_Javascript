//object literals

const sym = Symbol("abc")
const info  = {
    name : "Piyush",
    "lastname" : "kumar",
    enroll : 166,
    [sym] : "key",
    isLoggedIn : false,
    loginDays: ["Monday", "Sunday"],
    signInInfo : {
        username : "piyush",
        password : 23455,
    },
}

console.log(info);
console.log(info.loginDays); //accessing the props of object
console.log(info["signInInfo"]); //another way to accesss the props of object
console.log(info.lastname)
// console.log(info[lastname]) //not allowed
console.log(info["lastname"])
console.log(info[sym]); //accessing a symbol key

// Object.freeze(info); //change is not possible inside the obj

info.greet = function()
{
    console.log("Hello user");
}

info.greet2 = function()
{
    console.log(`hello user ${this.name}`)
}

console.log(info.greet());
console.log(info.greet2());
console.log(info);

