const user = {
    username : "Payal",
    price : 1999,
    welcomeMessage : function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();
// console.log(this);

// function chai(){
//     let username = "Payal"
//     console.log(this.username); //undefined
    
// }
// chai();

// const chai = function(){
//     let username = "Payal"
//     console.log(this.username);
// } 
// chai();

// const chai = () => {
//     let username = "Payal"
//     console.log(this);
// }

// chai();

//explicit return
// const addTwo = (num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(2,5))

//implicit return

//const addTwo =(num1,num2) => num1 + num2 // (num1+num2) this syntax mostly used in react so it's important
//what if we have to return an object then

const addTwo =(num1,num2) => ({username : "Payal"})

console.log(addTwo(2,5))