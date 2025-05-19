// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

let a = 300
if (true){
    let a = 10;
    const b = 20;
   // var c = 30 ;
   //console.log("INNER a :",a); //block scope
   
}
//console.log(a); // global scope
//console.log(b);
//console.log(c);

/*Nested Scope*/
function one(){
    const username = "Payal"

    function two(){
        const website = "Youtube"
       // console.log(username);
    }
    //console.log(website);
    two()
}
one();

addone(5);
function addone(num){
    return num +1
}

// addone(5);
//addTwo(5) //error: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
// addTwo(5);