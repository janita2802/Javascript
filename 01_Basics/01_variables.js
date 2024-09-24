const userId = 100;
let userEmail = "janita@outlook.com";
var userPassword = "12345";
userCity = "Mumbai";
let userState;

// userId= 128; // not allowed
userEmail = "jane@google.com";
var userPassword = "2828282";
userCity = "Pune";

console.log(userId );
/*
Prefer not to use var 
becuase of issue in block scope and functional scope
*/
console.table([userId ,userEmail,userPassword,userCity, userState ]);  //can be ued to print multiple values together.
