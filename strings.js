const name = "Payal";  //string declaration
const qualification = "BTech";//string declaration

console.log(`Hi My name is ${name} and my qualification is ${qualification}`)//string interpolation
const gameName = new String("zombies");//string declaration

//methods of strings
console.log(gameName.length); //length of string
console.log(gameName.charAt(2));    //character at index 2
console.log(gameName.indexOf("m")); //index of character "m"
console.log(gameName.bold()); //bold
console.log(gameName.concat(name)); //concatenation
console.log(gameName.endsWith("s")); //check if string ends with "s"
console.log(gameName.includes("o"));  //check if string includes "o"
console.log(gameName.lastIndexOf("z")); //last index of "z"
console.log(gameName.repeat(2)); //repeat string 2 times
console.log(gameName.split("m"));   //split string at "m"
console.log(gameName.slice(-5,-2)); //slice string from index -5 to -2
console.log(gameName.search("m")); //search for "m" in string
console.log(gameName.valueOf()); //get value of string


const newString = " payal-is-polite";
console.log(newString);
console.log(newString.lastIndexOf("p"));  
console.log(newString.indexOf("p"));
console.log(newString.trim()) //remove spaces from start and end
console.log(newString.split("-")) ; //split string at "-"
console.log(newString.replace("polite", "kind")); //replace "polite" with "kind"
console.log(newString.toUpperCase()); //convert string to uppercase
console.log(newString.toLowerCase()); //convert string to lowercase

const num = 12;
console.log(typeof num); //check type of num
console.log(typeof(num.toString())); //convert number to string and check type of num


