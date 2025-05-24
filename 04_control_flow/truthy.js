//const userEmail = "p@gmail.com"
// const userEmail = ""
const userEmail =  []


if(userEmail){
    console.log("Got user email");
    
}
else{
    console.log("Don't have user email");
    
}

//falsy value

// false,0,-0,BigInt 0n, "", null, undefined, NAN

// truthy value

// "0" zero inside string is truthy value
// "false" false inside " " is truthy value
// " " space inside string is truthy value
// { }, [], function(){}

if (userEmail.length === 0){
    console.log("array is empty")
}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
    
}

//NULLISH COALESCING OPERATOR (??): null or undefined

let val1;
// val1 = 5??10
val1 = null ?? 10

var1 = undefined ?? 15
console.log(val1);
console.log(var1);

// TERNIARY OPERATOR
// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("iceTeaPrice greater than 80") : console.log("iceTeaPrice less than 80");


