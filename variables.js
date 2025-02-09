const accountId = 12345  //This constant values and cannot be changed.
//values declared using let keyword means these values can be changed
let accountName = "Payal"  
let accountEmail = "payal@gmail.com"
let password = "12335"
cityName = "Jammu" // in js we can also declare variables without giving any keywords(let,const)but it is not a good practice to do
let State ; //The value is undefined

// accountId = 32145 we are trying to change the value of accountId but this line will give error which is TypeError: Assignment to constant variable.
console.log(accountId) //For printing we use console.log

accountName = "Sania" //now the accountName is assigned with value Sania
console.table([accountId,accountName,accountEmail,password,cityName,State]); //this will print all the values in table format