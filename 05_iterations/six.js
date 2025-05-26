const coding = ['js','ruby','java','python','cpp']

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
//     console.log(values);


const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = mynums.filter((num)=>num>4)
// console.log(newNums);

// const newNums = mynums.filter((num)=>{ 
//     return num>4
// })
// console.log(newNums);


//now using for Each

const newNums = []
mynums.forEach((num)=>{
    if(num >4){
        newNums.push(num)
    }
})

console.log(newNums)

const Books = [
    {
        title : 'Book1', genre : 'History', publish : 1992, edition : 2009
    },
    {
        title : 'Book2', genre : 'Science', publish : 2001, edition : 2010
    },
    {
        title : 'Book3', genre : 'Fiction', publish : 1995, edition : 2023
    },
    {
        title : 'Book4', genre : 'History', publish : 2001, edition : 2004
    },
    {
        title : 'Book5', genre : 'Non-Fiction', publish : 1992, edition : 2009
    },
    {
        title : 'Book6', genre : 'History', publish : 2001, edition : 2009
    }
]

let userBooks = Books.filter((bk)=>bk.genre ==="History")

userBooks = Books.filter((bk)=>{
    return bk.genre === 'History' && bk.publish === 2001
})
console.log(userBooks);
