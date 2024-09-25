const my_name = "Janita"
const repoCount = 30

console.log(my_name + repoCount + " Value");

console.log(`Hello my name is ${my_name} and my repo count is ${repoCount}`); // string Interpolation

const gameName = new String('Janita-JP-com') // String-Object

console.log(gameName[0]);
console.log(gameName.__proto__);  // object

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4)); //char present at given position
console.log(gameName.indexOf("P")); // gives -1 if char not found

const newStr = gameName.substring(0, 4) // excludes last value of given range
console.log(newStr);

const anotherString1 = gameName.slice(6) // from position 6 to the end
const anotherString2 = gameName.slice(0, 6) //Slice the first 6 positions
//----------------------------------------------------------------------------------
const anotherString3 = gameName.slice(-8, 4) //A negative number selects from the end of the string.
//----------------------------------------------------------------------------------
console.log(anotherString1);
console.log(anotherString2);
console.log(anotherString3); //A negative number selects from the end of the string.


const newStringOne = "   Janita    "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimEnd());

const url = "https://janita.com/janita%20phatak"

console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))


console.log(gameName.split('-'));

// Character access

console.log("cat".charAt(1));
console.log("cat"[0]);

const str1 = 'Cats are the best!';
const str2 = 'World';
console.log(str1.concat(' ', str2));
console.log(str1.endsWith('best!')); 

console.log(str1.padEnd(25, '.')); //padEnd(targetLength, padString)
console.log(str2.padEnd(5));

console.log(str1.padStart(23, '0')); //pads string with other string until the string reaches the given length. 
// The padding is applied from the start of this string.

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
console.log(maskedNumber);

const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;

console.log(`Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index,)}`)

const icons = '☃★♲';
console.log(icons.codePointAt(1));

console.log("ab\uD800c".isWellFormed()); //not UTF pairs
console.log("abc".isWellFormed());

const paragraph = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph.lastIndexOf('dog'));
console.log(paragraph.replaceAll('dog', 'monkey')) //returns a new string with all matches of a pattern(string/regexp) replaced by a replacement. 

console.log(paragraph.match(/[A-Z]/g));//match string against a regular expression.
// The /g in a regular expression (regex) stands for "global" and 
// indicates that the regex should search for all matches of a pattern in a string, not just the first one. 
array = [...paragraph.matchAll(/[A-Z]/g)];
console.log(array);


// localeCompare(compareString)
// localeCompare(compareString, locales)
// localeCompare(compareString, locales, options)

const a = 'réservé'; // With accents, lowercase
const b = 'RESERVE'; // No accents, uppercase
console.log(a.localeCompare(b));
// Expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// Expected output: 0

console.log(a.valueOf()); // returns this string value.







