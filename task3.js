// Looping Statements
// 1. Print Numbers
// Print numbers from 1 to 20 using a for loop.
  for(let a = 1 ; a<=20 ; a++){
    console.log(a);
  }
// 2. Odd Numbers
// Print all odd numbers from 1 to 50.
   for(let b=1 ; b<=50 ; b++){
    if(b%2==1){
        console.log("odd:-",b);

    }
   }
// 3. Multiplication Table
// Print the multiplication table of 7.
// Example:
 
// 7 x 1 = 7
// 7 x 2 = 14
let num = 7;

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}

// 4. Reverse Counting
// Using while loop, print numbers from 20 to 1.
let value = 20
while(value >= 1){
    console.log(value) //20 
    value--
}
// 5. Sum of Numbers
// Find the total sum of numbers from 1 to 100.

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log("Total Sum =", sum);
// 6. Array Loop
// Loop through this array and print all values.
// let fruits = ["apple","banana","orange","grapes"]
let fruits = ["apple", "banana", "orange", "grapes"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// 7. Count Even Numbers 
// Count how many even numbers are present between 1 to 50.
 let count = 0 ;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        count++;
    }
}

console.log("Total Even Numbers =", count);
// 8. Star Pattern
// Print this pattern using loops:
// *
// **
// ***
// ****
// *****
for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }

    console.log(pattern);
}
// Functions
// 9. Simple Function
// Create a function named welcome() that prints:
// Welcome to JavaScript
  function welcome(){
    console.log("welcome to javascript")
  }
  welcome()
// 10. Function with Parameter
// Create a function that accepts a name and prints:
// Hello Naveen
function greet(name) {
    console.log("Hello " + name);
}


greet("bilal");
// 11. Add Two Numbers
// Create a function that takes 2 numbers and returns the addition.
// Example:
// add(10,20)
// Output:
// 30
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);
// 12. Salary Bonus
// Create a function that adds bonus to employee salary.
// Example:
// salary = 50000
// bonus = 5000
let emp = {
    salary:50000
}
console.log(emp.salary);

function getobj(bonus){
    console.log(emp.salary+bonus)
}
getobj(5000)
// Output:
// 55000
// 13. Object Loop
// Print all keys and values using for in.
    let student = {
     name : "Rahul",
     course : "JavaScript",
     marks : 95
   }

   for(let a in student){
    console.log(student[a]);
   }
 
// 14. Find Largest Number
// Create a function to find the largest number between two values.
// Example:
// largest(10,50)

function largest(a, b) {
    return (a > b) ? a : b;
}

console.log(largest(10, 50));
// Output:
// 50
// 15. Mini Employee Task
// Create an employee object and print:
// Employee Name
// Department
// Salary
// Salary after bonus
// Using:
// object
// function
// parameter
// console.log()

let employee = {
    name: "Rahul",
    department: "IT",
    salary: 50000
};


function employeeDetails(emp, bonus) {

    let finalSalary = emp.salary + bonus;

    console.log("Employee Name: " + emp.name);
    console.log("Department: " + emp.department);
    console.log("Salary: " + emp.salary);
    console.log("Salary after bonus: " + finalSalary);
}


employeeDetails(employee, 5000);