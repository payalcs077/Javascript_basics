function sayMyName(){
        console.log(`My name is Payal`)
}

sayMyName()
// sayMyName 

// function addTwoNumber(num1,num2){
//     console.log(num1 + num2);
// }
function addTwoNumber(num1,num2){
    return (num1 + num2);
}

result = addTwoNumber(2,3);
//console.log("Result:", result);

function userLoginMessage(username){
    if(!username){
        console.log("Please enter your username");
        return
    }
    return `${username} just logged in.`
}

console.log(userLoginMessage("Sam"));

function calculateCartPrice(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPrice(100,200,300,2009))


// handling objects in functions
const user = {
    username : "Payal",
    price : 199
}

function handleObject(anyobject){
    return `Username is ${anyobject.username} and price is ${anyobject.price}`
}

//console.log(handleObject(user));
console.log(handleObject({
    username : "Sam",
    price : 200
}));
 
// handling arrays in objects
const myArray = [100,200,300]

function getSecondValue(myArr){
    return myArr[1]
}

// console.log(getSecondValue(myArray));
console.log(getSecondValue([3000,4000,5000]));

