// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Janita",
            lastname: "Phatak"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 }
console.log(obj3);

const obj5 = Object.assign({}, obj1, obj2, obj4) //IMPORTANT
console.log(obj5);

const obj6 = {...obj1, ...obj2}
console.log(obj6);


const users = [
    {
        id: 1,
        email: "j@gmail.com"
    },
    {
        id: 1,
        email: "j@gmail.com"
    },
    {
        id: 1,
        email: "j@gmail.com"
    },
]

console.log(users[1].email)

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //IMP


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "JJP"
}

console.log(course.courseInstructor);
 

const {courseInstructor: instructor} = course
console.log(instructor);

// {
//     "name": "Janita",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]