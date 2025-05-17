const myArr = [1,2,3,4,5]; //Simple array declaration

console.log(myArr); 
console.log(myArr[0]); 

const myArr2 = new Array(1,2,3,4,5); // Array constructor
console.log(myArr2);

console.log(myArr2.length); // length of an array

//Methods 
console.log(myArr2.includes(2)); // true
console.log(myArr2.includes(6));    // false
console.log(myArr2.indexOf(2));     // 1
console.log(myArr2.indexOf(6));         // -1
console.log(myArr2.push(6));     // 6
//console.log(myArr2);    // [ 1, 2, 3, 4, 5, 6 ]
console.log(myArr2.pop()); //6
//console.log(myArr2);             // [ 1, 2, 3, 4, 5 ]
console.log(myArr2.unshift(0));  // shift all elements to the right and add 0 to the beginning of the array  
//console.log(myArr2);         
console.log(myArr2.shift()); //remove the first element of the array 
//console.log(myArr2);                                           
// slice and splice method in arrays
console.log(myArr2.slice(1,3));
console.log(`After Slice method :`,myArr2);
console.log(myArr2.splice(1,3));
console.log(`After Splice method :`,myArr2);

// concat and spread operator 
//concat method
const disneyPrincesses = ['cinderalla', 'snowhite', 'ariel'];
const disneyVillains = ['maleficent', 'ursula', 'scar'];
const disneycharacters = disneyPrincesses.concat(disneyVillains);
console.log(disneycharacters);
//Spread operator
const disneycharacters2 = [...disneyPrincesses, ...disneyVillains];
console.log(disneycharacters2); // [ 'cinderalla', 'snowhite', 'ariel', 'maleficent', 'ursula', 'scar' ]
//push method
disneyPrincesses.push(disneyVillains); // push method adds the array as a single element in the existing array
console.log(disneyPrincesses); // [ 'cinderalla', 'snowhite', 'ariel', [ 'maleficent', 'ursula', 'scar' ] ] 

// arrays inside arrays
const new_arr = [1,2,3,[4,5,6,[7,8,9]]];
const my_new_arr = new_arr.flat(Infinity); // flat method flattens the array to the specified depth
console.log(my_new_arr);

Array.isArray("Payal") // false     
console.log(Array.from("Payal"));
console.log(Array.from({Name: "Payal"})); // interesting


const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]

