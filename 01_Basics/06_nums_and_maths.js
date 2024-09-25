const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length); //returns string
console.log(balance.toFixed(1)); // digits after decimal 

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); //little comples , precise the value --focus on 4 digits here

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

const no = new Number(4);
console.log(no.toExponential());

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

//+++++++++++++++++++++++++++++ imp +++++++++++++++++++++++++++++

console.log(Math.random()); //range - 0 to 1
console.log((Math.random()*10) + 1); // to avoid 0 value we add 1
console.log(Math.floor(Math.random()*10) + 1); // floor to remove decimals

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //imp formula ezpz