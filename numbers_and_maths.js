const score = 400;
console.log(score);
const balance =  new Number(100); // Using the Number constructor
console.log(balance);
console.log(balance.toString()); // Convert to string
console.log(balance.toFixed(2)); // Convert to fixed-point notation
console.log(balance.toPrecision(5)); // Convert to fixed-point notation with 5 digits
const anotherNumber = 1000000;
console.log(anotherNumber.toLocaleString('en-IN')); // Convert to locale-specific string

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE); // Maximum and minimum values
console.log(Number.POSITIVE_INFINITY); // Positive infinity
console.log(Number.NEGATIVE_INFINITY); // Negative infinity
console.log(Number.NaN); // Not a number
console.log(Number.isInteger(10)); // Check if a number is an integer
console.log(Number.isInteger(10.5)); // Check if a number is an integer
console.log(Number.isNaN(NaN)); // Check if a value is NaN          
console.log(Number.isNaN(10)); // Check if a value is NaN
console.log(Number.isFinite(10)); // Check if a value is finite

/* *************************************************************** ********** */
// Math object
console.log(Math.PI); // return PI value - 3.141
console.log(Math.floor(4.567)); // return the largest integer less than or equal to 4.567
console.log(Math.ceil(4.567)); // return the smallest integer greater than or equal to 4.567
console.log(Math.round(4.567)); // return the value of 4.567 rounded to the nearest integer)
console.log(Math.abs(-4.567)); // return the positive value of -4.567
console.log(Math.floor(Math.random()*6) +1); // return a random number between 1 and 6
console.log(Math.max(4,5.,6)); // return the maximum of 4,5,6
