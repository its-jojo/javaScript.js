// Premitive

// 7 types: String, number, boolean, null, undefined, symbol, bigint.

const score = 100

const scoreValue= 100.3

const isLoggedIn= false
const outSideTemp = null
let userEmail

const id= Symbol('123')
const anotherId= Symbol('123')

console.log(id===anotherId);

const bigNumber = 14242343453454242332n

console.log(bigNumber)




// Reference (NonPrimitive)

// Array, Objects, Functions.

const heros = ["saktiman","naagraj","doge"]

let myObj={
    name:"jyoti",
    age: 22,
}


const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);
console.log(typeof score);
console.log(typeof outSideTemp)
console.log(typeof myFunction)
console.log(typeof id)