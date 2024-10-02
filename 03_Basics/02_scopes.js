var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

console.log(a);
// console.log(b); // error --out of scope
console.log(c);


function one(){
    const username = "janita"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); error --out of scope

     two()

}

// one()

if (true) {
    const username = "janita"
    if (username === "janita") {
        const website = " youtube"
        console.log(username + website); // allowed 
    }
    // console.log(website); error --out of scope
}

// console.log(username); // error --out of scope


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //allowed

function addone(num){ //normal function, can call it before declaration
    return num + 1
}




// addTwo(5) -- not allowed
const addTwo = function(num){ // expression function , can call/invoke after declaration only
    return num + 2
}
addTwo(5) 