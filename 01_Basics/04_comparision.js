console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);
console.log("----------------------");


console.log("2" > 1);
console.log("02" > 1);
console.log("----------------------");

//avoid these type of conversions
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); 
console.log("----------------------");
//The reason is that an equality check == and comparisions ><>=<= work differently.
// Comparisions convert null to a number, treating it as 0, Thus, null >=0 is true & null>0 is false.

//avoid these type of conversions
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined > 0);

console.log("----------------------");
console.log("2" === 2); // compare both data type and value 