function sayMyName(){
    console.log("J");
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("T");
    console.log("A");
}

sayMyName()

function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2){ // parameters

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5) // arguments
console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username"); //if arguments are missing
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Janita"))
console.log(loginUserMessage())


function calculateCartPrice(val1, val2, ...num1){
    return num1 //val1 assigned to 1st number in array, val2 to 2nd , and rest is to num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "janita",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

//OR 

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 800, 500, 1000]));