// const isUserLoggedin = true
// if(2<=2){
//     console.log("executed");
    
// }

// const score = 200

// if(score >100){
//     let power = "fly"
//     console.log(`User Power ${power}`);
    
// }
//     console.log(`User Power ${power}`);

// const balance = 1000
// // if(balance >500) console.log("test"),console.log("test2"); never write code like this, it's not a good practice

// if(balance <500){
//     console.log("Balance less than 500");
    
// }
// else if(balance <750){
//     console.log("Balance less than 750");
    
// }
// else{
//     console.log("Balance less tahn 1200");
    
// }

const userLoggedin = true
const debitCard = true
const userLoggedinfromGoogle = false;
const userLoggedinfromEmail = true

if (userLoggedin && debitCard){
    console.log("Allowed to purchase courses");
    
}
if(userLoggedinfromGoogle || userLoggedinfromEmail){
    console.log("User logged in");
    
}