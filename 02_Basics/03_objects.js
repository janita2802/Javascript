// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Janita",
    "full name": "Janita Phatak",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "Janita@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "Janita@chatgpt.com"
console.log(JsUser);
Object.freeze(JsUser) // freeze--no further changes
JsUser.email = "Janita@microsoft.com"
console.log(JsUser);


const JsUser1 = {
    name: "Janita",
    "full name": "Janita Phatak",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "Janita@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

JsUser1.greeting = function(){
    console.log("Hello JS user");
}
JsUser1.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser1.greeting());
console.log(JsUser1.greetingTwo());