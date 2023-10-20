//Block scoped
// const accountId ; //It cannot be declared without initialization.
const accountId = 166;
//accountId = 188; //It cannot be updated.
// const accountId = 177; //It cannot re-declared into the scope.
console.log(accountId);

let accountName; //Block scoped
accountName = "Piyush Kumar";
// let accountName/ //It can be updated but cannot be re-declared into the scope.
console.log(accountName);

var place; //Funcitonal scoped
place = "Bihar"
var place = "Gaya";
console.log(place);

console.table([accountId,accountName,place]);