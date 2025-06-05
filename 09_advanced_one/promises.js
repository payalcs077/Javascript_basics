 //Promise 1
 const promiseOne = new Promise(function(resolve,reject){
    // Do an async task ---> DB calls, cryptopgraphy, network calls
    setTimeout(()=>{
        console.log("Async task is completed")
        resolve()
    },1000)
 })

 promiseOne.then(function(){
    console.log("Promise consumed");  
 })

 // Promise 2
 new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log("Async task 2"); 
            resolve()
        },1000)
 }).then(()=>{
    console.log("Async task 2 resolved");
    
 })

// Promise 3
 const promiseThree = new Promise(function(resolve, rejected){
    setTimeout(function(){
        resolve({user:"Payal",email:"payal@example.com"})
    },1000)
 })

 promiseThree.then(function(user){
    console.log(user)
 })

 //Promise 4

 const promiseFour = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let error = false
            if(!error){
                resolve({username:"Payal", password : "123"})
            }
            else{
                reject("Something:Went Wrong")
            }
        },1000)
 })
 promiseFour
 .then((user)=>{
    console.log(user);
    return user.username
 })
 .then((username)=>{
    console.log(username);
 })
 .catch((error)=>{
    console.log(error);
 })
 .finally(()=> console.log("The promise is either resolved or rejected"))

 // promise 5
 const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username: "Javascript",password: "123"})
        }
        else{
            reject("Something went wrong in JS")
        }
    },1000)
 })

 async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
 } consumePromiseFive()