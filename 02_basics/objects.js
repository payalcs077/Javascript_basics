// //Symbol
// const mysym = Symbol("Key1");

// const JsUser = {
//     name: "Payal",
//     [mysym] : "myKey1",
//     "full name" : "Payal Thappa",
//     age : 18,
//     location : "Jammu",
//     email : "payal@google.com",
//     isLoggedIn : false,
//     LastLoginDays : ["Monday","Saturday"]
// }

// console.log(JsUser);

// // console.log(JsUser["full name"]);
// // console.log(JsUser["email"]);


// //Object.freeze(JsUser); // freeze method makes the object immutable
// // JsUser.email = "payal@dxc.com";
// // console.log(JsUser.email);

// //Function inside object

// JsUser.greeting = function(){
//     console.log(`Hello JS User`);

// }

// JsUser.greetingTwo = function(){
//     console.log(`Hello JS USer ${this["full name"]}`);
// }
// console.log((JsUser.greetingTwo()));

// console.log(JsUser.greeting());

// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = 12345;
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "sam@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Sam",
            lastName : "Smith"
        }
    }
}

//console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
//const object3 = Object.assign({},obj1,obj2)
//const obj3 = {obj1, obj2}
const object3 = {...obj1, ...obj2}
//console.log(object3);

const users = [
    {
        id : 1,
        email : "1@gmail.com"
    },
    {
        id : 2,
        email : "2@gmail.com"
    },
    {
        id : 3,
        email : "3@gmail.com"
    }
]
users[1].email;
// console.log(users[1].email);

// console.log(tinderUser)
// console.log(Object.keys(tinderUser));// returns the keys of the object and return type is an array (important topic)
// console.log(Object.values(tinderUser));// returns the values of the object and return type is an array (important topic)
// console.log(Object.entries(tinderUser));// returns the entries of the object and return type is an array (important topic)
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));// returns true or false if the object has the property or not (important topic)


const course = {
    courseName : "Javascript",
    coursePrice : "999",
    courseInstructor : "Hitesh"
}

//course.courseName 

const {courseInstructor : instructor} = course
console.log(instructor)