

const mp = new Map();
const obj = {
    cpp : "C++",
    js : "Javascript",
    swift : "Swift by apple",
    rb : "ruby",
}

const langs = Object.keys(obj); //a array that contain all key of obj

//For of loop : for array, map etc but not for object
console.log("Array using forOf loops : ")

for (const lang of langs) {
    console.log(lang);
}

//For in loop : recommended for obj
console.log("Object using forIn: ")

for (const key in obj) {
    console.log(key + " -> " + obj[key])
    mp.set(key,obj[key]);
}

//De-structure of key value pair
console.log("Map using forOf : ")
for (const [key, value] of mp) {
    console.log(key + " -> " + value)
}

/*
    forEach loop : 
        Syntax : arrayName.forEach( callbackFunction(item,index,arryaName){} )
        Callback function doesn't contain function name.
        forEach doesn't return anythings.
*/

console.log("Array using forEach loops : ")

const values = langs.forEach( function (lang){
    console.log(lang + " " + index + " " + arr);
} )

console.log(values) //print undefined because forEach doesn't return anythings.

const arr = [
    {
        lang : "c++",
        file : "cpp",
    },
    {
        lang : "javascript",
        file : "js",
    },
    {
        lang : "python",
        file : "py",
    }
]

arr.forEach( (key) => {
    console.log(key.lang);
})





