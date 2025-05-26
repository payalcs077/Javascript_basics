//reduce

const myNum = [1,2,3]

const mytotal = myNum.reduce((acc,curr)=> acc + curr,0)
console.log(mytotal);


const shoppingCart = [
    {
        itemName : "Javascript course",
        itemPrice : 2999
    },
    {
        itemName : "Python course",
        itemPrice : 999
    },
    {
        itemName : "Datascience",
        itemPrice : 12999
    }

]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.itemPrice, 0)

console.log(priceToPay);
