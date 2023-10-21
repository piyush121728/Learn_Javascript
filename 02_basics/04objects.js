//singelton objects 

const obj1 = new Object({1:11,2:12});
const obj2 = new Object({3:13,4:14});

//merge two objects

// const obj = {obj1,obj2}
// const obj = Object.assign({},obj1,obj2);
const obj = {...obj1,...obj2};
console.log(obj)

//special functions

console.log(Object.keys(obj)); //print array of all keys of objecs
console.log(Object.values(obj)); //print array of all values of objects
console.log(Object.entries(obj)); //print all key-value pairs

//Object de-structure

const course = {
    courseId : 101,
    courseName : "English",
}

const {courseId} = course;
console.log(course.courseId); //101

const {courseName: sub} = course; //English
console.log(sub);