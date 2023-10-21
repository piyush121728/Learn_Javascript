/*
iffe : Immediately Invoked Function Expression
Sometime problem occur due to pollution of global scope to avoid this pollution we use iffe.

Declaration of iffe : 
Synatx :  (function declaration and definition)();
Note : must use semicolon o.w iffe will not stop the context
*/



//named iffe
(function chai() { console.log('Chai is ready.') })();

//simple iffe
((username)=>{console.log(`user is ${username}`)})('piyush');