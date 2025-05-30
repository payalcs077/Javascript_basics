//for of loop on arrays
const arr = [1,2,3,4,5]

for(const num of arr){
    console.log(num);
    
}
// for of loop on strings
const greetings = "Hello world!"
for(const greet of greetings){
    if(greet === " ")
        continue;
    console.log(`each char is ${greet}`) 
}

// for of loop on maps

const map = new Map()
map.set('IN',"India")
map.set('UK','United Kingdom')
map.set('FR',"France")

// for(const key of map){
//     console.log(key);
    
// }

for(const [key,value] of map){
    console.log(key, ':-', value);
}

const myobject ={
    "game1" : "Clash of clans",
    "game2" : "PUBG"
}
// error - because object are not iterating in this way
// for(const [key, value] of myobject){
//     console.log(key, value);
    
// }