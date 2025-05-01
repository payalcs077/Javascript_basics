/*Dataypes in javscript
**Primitive datatypes
1. Number
2. Bigint
3. Boolean => True/False
4. String = " "
5. Undefined
6. Null => standalone value
7. Symbol => unique

** non primitive
8. Object,function,array
*/

let x = 3 
console.log(typeof(x)) // number
let y = BigInt("123456789012345678901234567890");
console.log(typeof(y)) //bigint
//boolean 
let a =5
let b =6
let c =5
console.log(a==b) //false
console.log(b==c) //false
console.log(a==c) //true

let myname = "Payal"
console.log(myname) //payal
console.log(typeof(myname)) //string

let stage;
console.log(stage) //undefined
console.log(typeof(stage)) //undefined

console.log(typeof(null)); //object

//non primitive datatypes
//objects
let myobj = {
  myname : "Payal",
  age : 22
}

console.log(myobj) //{ myname: 'Payal', age: 22 }
console.log(typeof(myobj)) //object
