
//this keyowrd refers to current context

const data = {
    username: "Piyush",
    age: 21,
    infor: function () {
        console.log(this) //print current context
        console.log(`${this.username} is ${this.age} year old.`)
    }
}

data.infor();
data.username = "ayush";
data.infor();

console.log(this); //print {} because this refers to an empty object here.

function func() {
    console.log(this); //print global object because 'this' refers to a global object here.
}
func();

//decalartion of arrow function
const arrowFunc = () => {
    console.log(this); //print {} because this refers to an empty object here.
}
arrowFunc();

//Arrow functions

// const arrowF = (num1, num2) => (num1 + num2); //implicit return

const arrowF = (num1, num2) => {
    return num1 + num2; //explicit return
};

const res = arrowF(4,5);
console.log(res);

const arrowF1 = () => ({username: "Aman"}); //implicit return
const res1 = arrowF1();
console.log(res1);


