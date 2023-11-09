// With the call() and apply() method, we can write a method that can be used on different objects.

const person = {
    fullName: function(city, state) {
        return this.firstName + " " + this.lastName + " is from " + city + ", " + state;
    }
}

const person1 = {
    firstName: "Piyush",
    lastName: "Kumar",
}

const person2 = {
    firstName: "Ayush",
    lastName: "Kumar",
}

const person3 = {
    firstName: "Aman",
    lastName: "Kumar",
}

console.log(person.fullName.call(person1, "vadodara", "Gujarat"));
//The apply() method accepts arguments in an array
console.log(person.fullName.apply(person2, ["vaishali", "Bihar"]));



