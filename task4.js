// Task 1 — Basic Function
// Create a function called welcomeUser.
// Requirements:
// Accept name
// Print:
// Welcome Naveen
// Example:
// welcomeUser("Naveen")
function welcomeuser (parameter){
    console.log(parameter)
}
welcomeuser("bilal")
// Task 2 — Parameter + Return
// Create a function squareNumber.
// Requirements:
// Accept one number
// Return square value
// Example:
// squareNumber(5)
// Output:
// 25
function squareNumber (number){
    return(number)
}
let emp3 = squareNumber(6*6)
console.log(emp3)
// Task 3 — Object Function
// Create an object:
// {
//    name : "Rahul",
//    salary : 50000
// }
// Requirements:
// Create a function:
// employeeBonus(bonus)
// Output:
// Rahul
// 55000
let emp1 ={
    name :"Rahul",
    salary:50000
}
console.log(emp1.salary);
function getobj(bonus){
    console.log(emp1.name);
    console.log(emp1.salary+bonus);
}
getobj(5000)

// Task 4 — Scope Checking
// Inside a function:
// Create var
// Create let
// Create const
// Requirements:
// Try accessing them outside block
// Observe which works and which gives error
function scopcheck(){
    if(true){
        var a1="var variable"
        let a2="let variable"
        const a3="const variable"
console.log(a2)
console.log(a3);

    }
    console.log(a1)
}
scopcheck()
// Task 5 — Arrow Function
// Convert this into arrow function:
// function add(a,b){
//    console.log(a+b);
// }
let Arrow =(parameter)=>{
    console.log(parameter);
}
Arrow("a,b")
// Task 6 — Callback Function
// Create:
// multiply
// calculator
// Requirements:
// calculator should accept:
// callback function
// two numbers
// Example:
// calculator(multiply,5,2)
// Output:
// 10
function multiply(calback,a,b){
    console.log(a*b);
    calback(4,5);
    
}
function calculator(num1,num2){
    console.log(num1+num2);
    
}
multiply(calculator,4,5)
// Task 7 — Generator Function
// Create generator function offers.
// Requirements:
// Yield:
// "50% OFF"
// "Free Delivery"
// "Cashback"
// Use:
// next()
// to print values one by one.
function* supermarket(){
    yield    "50% OFF"
    yield   "Free Delivery"
    yield   "Cashback"
}

let genVal = supermarket()

console.log(genVal.next().value);
console.log(genVal.next().value);
console.log(genVal.next().value);

// Task 8 — Default Parameter
// Create:
// student(name,course="JavaScript")
// Requirements:
// If course not passed,
// default should become "JavaScript".
let form = function(name,course="javascript"){
    console.log("name",name);
    console.log("course",course);
    
    
}
form("kumar")
form("ravi","CSE",)

// Task 9 — Currying
// Create currying function for multiplication.
// Example:
// multi(2)(3)(4)
// Output:
// 24
let box = function(multi){
    console.log(3*4*5);
    
}
box()
// Task 10 — Spread Operator
// Merge these arrays:
// [1,2,3]
// [4,5,6]
let arr1=[1,2,3,]
let arr2=[4,5,6,]

let totalarray = [...arr1,...arr2]
console.log(totalarray)
// Final Output:
// [1,2,3,4,5,6]
// Task 11 — Object Spread
// Merge two objects:
// {name:"Navi"}
// {role:"Developer"}
let obj1={name:"bilal"

}
let obj2={role:"Developer"

}

let totalobj={...obj1,...obj2}
console.log(totalobj)
// Final Output:
// {
//   name:"Navi",
//   role:"Developer"
// }
// Task 12 — Rest Operator
// Create function:
// numbers(...num)
// Requirements:
// Print all numbers
// Print total sum
// Example:
// numbers(1,2,3,4)
function random(a,b,c,d){
    console.log(a+b+c+d);
    
}
random(1,2,3,4)
// Output:
// [1,2,3,4]
// 10
// Mini Challenge 🔥
// Create one small Student Management System using:
// function
// callback
// object
// array
// spread operator
// rest operator
// Features:
// Add student
// Print students
// Calculate marks
// Add bonus marks
// Student Management System

let students = [];

// Function + Object + Array
function addStudent(name, marks) {
    students.push({
        name,
        marks
    });
}

// Callback Function
function studentDetails(callback) {
    callback();
}

// Spread Operator
function addBonus(bonus) {
    students = students.map(student => ({
        ...student,
        marks: student.marks + bonus
    }));
}

// Rest Operator
function totalMarks(...marks) {
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    console.log("Total Marks =", total);
}

// Add Students
addStudent("Bilal", 80);
addStudent("Rahul", 70);
addStudent("Ayesha", 90);

// Callback Calling
studentDetails(function () {

    console.log("Student Details:");

    students.forEach(student => {
        console.log(student.name + " = " + student.marks);
    });

});

// Add Bonus Marks
addBonus(5);

console.log("After Bonus:");

students.forEach(student => {
    console.log(student.name + " = " + student.marks);
});

// Calculate Total
totalMarks(85, 75, 95);