const { kafka } = require('./client')

async function init(){
    const producer = kafka.producer()
    console.log('producer is connecting')

   await producer.connect()
    console.log('procucer is connected successfully')

    await producer.send({
        topic : 'rider-updates',
        messages :  [
            {
                partition : 0,
                key :  "location-update",
                value : JSON.stringify({name:"Aditya Singh",loc : south}),

            },
        ],
    });
   await producer.disconnect();
}
init(); 

const arr = [
    {
        lgname :"javascript",
        sym:  "js"
    },
    {
        lgname : "java",
        sym:  "java"
    },
    {
        lgname :"python",
        sym:"py"
    },
]
arr.forEach(function(item){
    console.log(item.sym);
}) 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
]
let User = books.filter((want) => {
    return want.genre === 'Science'
})
User = books.filter((want) => want.publish>2000 && want.edition>2004)
console.log(User);

const Cart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const CartCount = Cart.reduce((acc,curr) => acc+curr.price ,0);
console.log(CartCount);