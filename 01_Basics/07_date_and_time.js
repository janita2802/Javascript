let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); //obj

let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
let myCreatedDate2 = new Date("2023-01-14")
let myCreatedDate3 = new Date("01-14-2023")
console.log(myCreatedDate3.toLocaleString()); //imp

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); //time in seconds--default its in milliseconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time ` ----can be used to specify date and time in application

newDate.toLocaleString('default', {
    weekday: "long",
    hour: "2-digit", 
}) // we can define structure of date

console.log(newDate);
