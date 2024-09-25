// There are 2 types of dataTypes- 
// Premitive and NonPremitive -- based on memory allocation and how we access it.
// Primitive data -- call by value --creates copy of the original data
// Non Primitive data -- call by reference , updates original data

//  Primitive ----- Stack

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 // acts like a number only
console.log(scoreValue);


const isLoggedIn = false
const outsideTemp = null //empty
let userEmail; //undefined

const id = Symbol('123') //unique
const anotherId = Symbol('123')

console.log(id === anotherId); // gives false as both are unique as we used symbol

const bigNumber = 3456543576654356754n //bigInt



// Reference (Non primitive) --- heap

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
console.log(typeof myFunction);
console.log(typeof bigNumber);
console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// typeof Operator Results

// Undefined -- "undefined"
// Null -- "object"
// Boolean -- "boolean"
// Number -- "number"
// String -- "string"
// Object -- (native and does not implement [[Call]])	"object" --- e.g -object, array
// Object -- (native or host and does implement [[Call]])	"function" --- e.g -functions

// Object -- (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string"