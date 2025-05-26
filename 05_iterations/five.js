//for each loop

const coding = ['js','ruby','java','python','cpp']

coding.forEach(function(item){
    //console.log(item);
    
})
//forEach with arrow function
coding.forEach((item)=>{
    //console.log(item);
})
//declaring another function
function printMe(item){
   // console.log(item);
}
// calling that function in forEach loop
coding.forEach(printMe)


// iterating over object items in an array

const myCoding = [
    {
        languageName : 'Javascript',
        languageFileName : 'JS'
    },
    {
        languageName : 'Java',
        languageFileName : 'Ja'
    },
    {
        languageName : 'Python',
        languageFileName : 'py'
    }
]

myCoding.forEach((item) =>{
    console.log(item.languageName);
    
})