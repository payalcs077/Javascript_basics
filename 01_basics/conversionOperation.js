// The Number() method converts a variable (or value) into a number:
let goal = "12" //declaring goal as string
let isNumber = Number(goal) //converting goal to a number by using Number Method
console.log(isNumber)          // printing value of isNumber =>12
console.log(typeof isNumber) // checking typeof isNumber =>number

let value = 1 // declaring  value as number
let isboolean = Boolean(value) // converting value to a boolean type by using boolean Method
console.log(isboolean) // printing value of isboolean =>true
console.log(typeof isboolean) //checking type of isboolean =>boolean

let newNumber = 123 
let stringNumber = String(newNumber); //converting number to a string using String method
console.log(stringNumber) //printing value of stringnumber =>123
console.log(typeof stringNumber) //printing type of string number =>String

let anyString = "abc123"
let anyNumber = Number(anyString); //converting any string which is not a proper string(like abc123) will return a NAN(Not a Number)
console.log(anyNumber) // NAN
console.log(typeof anyNumber) //Number

// An empty string will converts to 0 Number(" ") => 0
//Number("54 56") =>NAN
//Number("payal") =>NAN


// Prefix and Postfix operators

let a = 3
let b = a++

console.log(`a =${a} b = ${b}`); // If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
let c = ++a
console.log(`a = ${a} c=${c}`); //If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
