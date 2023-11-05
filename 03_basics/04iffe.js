/*
iffe : Immediately Invoked Function Expression 
It's a JavaScript function that runs as soon as it's defined.
Sometime problem occur due to pollution of global scope to avoid this pollution we use iife.

Declaration of iife : 
Synatx :  (function declaration and definition)(arguments);
Note : must use semicolon o.w iife will not stop the context
*/



//named iife
( function chai() { console.log('Chai is ready.') })();

//simple iife
((username)=>{console.log(`user is ${username}`)})('piyush');
