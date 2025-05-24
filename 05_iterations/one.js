// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// }


for (let i = 1; i <= 10; i++) {
        // console.log(`Outer loop ${i}`);      
    for (let j = 1; j <= 10; j++) {
       // console.log(`Inner loop ${j} with outer loop ${i}`);
    //    console.log(`${i}*${j}=${i*j}`);
       
    }  
}

// let myArray = ["Cinderalla","Ariel","Snowwhite"]
// console.log(myArray.length);

// for(let i =0; i <myArray.length; i++){
//     const element = myArray[i]
//     console.log(`elements in array are : ${element}`);
    
// }

//break and continue keywords
// for(i = 1; i <= 10; i++){
//     if(i==5){
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`value of i is ${i}`);
    
// }
for(i = 1; i <= 10; i++){
    if(i==5){
        console.log("Detected 5");
        continue;
    }
    console.log(`value of i is ${i}`);
    
}