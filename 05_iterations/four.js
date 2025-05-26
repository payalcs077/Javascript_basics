// for in loop on objects
const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for(const key in myObject){
    console.log(`${key} shortcut is ${myObject[key]}`);
    
}

// for in loop on arrays

const myArray = ['js','python','ruby','c++']

for (const key in myArray) {
    console.log(myArray[key]);
    
}

// for in loop on map

const map = new Map()
map.set('IN',"India")
map.set('UK','United Kingdom')
map.set('FR',"France")

for(const key in map){
    console.log(key); // it will not print anything because map is not iterable
    
}