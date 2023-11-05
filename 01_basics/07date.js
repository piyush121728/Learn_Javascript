let date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toJSON());
console.log(date.toUTCString());
console.log(date.toISOString());


// Output : is in form of string
// 2023-10-20T18:18:33.967Z
// Fri Oct 20 2023 18:18:33 GMT+0000 (Coordinated Universal Time)
// 10/20/2023, 6:18:33 PM
// 10/20/2023
// 6:18:33 PM
// Fri Oct 20 2023
// 18:18:33 GMT+0000 (Coordinated Universal Time)
// 2023-10-20T18:18:33.967Z
// Fri, 20 Oct 2023 18:18:33 GMT
// 2023-10-20T18:18:33.967Z


console.log(date.getDate()); 
console.log(date.getDay());
console.log(date.getMonth())
console.log(date.getFullYear())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds());


//we can create date in custom format
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})







