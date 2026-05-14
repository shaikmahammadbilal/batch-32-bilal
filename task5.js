// Task 1 — Student Registration Form
// Create a program using:
// prompt()
// variables (let, const)
// console.log()
// Requirements:
// Ask student name
// Ask department
// Ask age
// Print all details using template string
    let studentname = prompt(enteryourname="bilal");
        console.log(enteryourname);
    
        let department  = prompt(enteryourdepartment="department:ECE");
        console.log(enteryourdepartment);
        
    const age1      = prompt(enteryourage="age:23");
    console.log(enteryourage);
    
// Example Output:
// Welcome Naveen
// Department: CSE
// Age: 20
// Task 2 — ATM Withdrawal System
// Use:
// if else
// comparison operators
// logical operators
// Requirements:
// User balance = 10000
// Ask withdrawal amount
// If amount <= balance → "Transaction Successful"
// Else → "Insufficient Balance"
// Bonus:
// Minimum withdrawal = 100
   let userbalance =10000
   if(userbalance>=1000){
    console.log("Transaction successful");
   }else{
    console.log("Insufficient Balance");
    
   }console.log("Minimum withdrawal = 100");

// Task 3 — Swiggy Discount Checker
// Use:
// ternary operator
// Requirements:
// If order amount > 499
// Show:
// "Free Delivery Available"
// Else:
// "Delivery Charges Applied"
   499<=500 ? console.log("Free Delivery Available"):console.log("Delivery Charges Applied");
   
   
// Task 4 — Instagram Login System
// Use:
// nested if
// Requirements:
// Correct username = "admin"
// Correct password = "1234"
// Conditions:
// If username correct → ask password
// If password correct → Login Success
// Else → Wrong Password
// Else → Invalid Username

let username = prompt("Enter Username");

if (username === "admin") {

    let password = prompt("Enter Password");

    if (password === "1234") {
        alert("Login Success");
    } else {
        alert("Wrong Password");
    }

} else {
    alert("Invalid Username");
}




// Task 5 — Traffic Signal System
// Use:
// switch statement
// Requirements:
// Input:
// red / yellow / green
// Output:
// STOP
// READY
// GO
let trafficsignal =("green")
switch (trafficsignal){
  case "red" : console.log("stop");
  break;
  case "yellow" : console.log("ready");
  break;
  case "green" : console.log("go");
  break;
  default:console.log("have a nice day")
}
// Task 6 — Employee Salary Calculator
// Use:
// function
// parameters
// return
// Requirements:
// Create function salaryCalculation
// Basic salary + bonus
// Return total salary
// Example:
// salaryCalculation(25000,5000)
// Output:
// 30000

function salaryCalculation(basicSalary, bonus) {

    let totalSalary = basicSalary + bonus;

    return totalSalary;
}

let result1 = salaryCalculation(25000, 5000);

console.log(result1);




// Task 7 — E-Commerce Cart Total
// Use:
// Array
// for loop
// Requirements:
// Store product prices inside array:
// [100,200,300,400]
// Find:
// Total price
// Average price
 

let prices = [100, 200, 300, 400];

let total = 0;

for (let i = 0; i < prices.length; i++) {
    total = total + prices[i];
}


let average = total / prices.length;

console.log("Total Price = " + total);
console.log("Average Price = " + average);
// Task 8 — WhatsApp Contact Book
// Use:
// Object
// for in loop
// Requirements:
// Store:
// name
// phone
// status
// Print all details dynamically.
let Requirements={
    name:"bilal",
    phone:86476584,
    status:"available"
}
for(let a in Requirements){
    console.log(a,Requirements[a]);
    
}
// Task 9 — Movie Ticket Booking
// Use:
// function
// callback function
// Requirements:
// Create:
// bookTicket()
// payment()
// After booking complete,
// callback payment function automatically.
function payment() {
    console.log("Payment Successful");
}


function bookTicket(callback) {
    console.log("Ticket Booking Completed");

    
    callback();
}

bookTicket(payment);

// Task 10 — Food Delivery Time Tracker
// Use:
// Generator Function
// Requirements:
// Show order stages one by one:
// Order Confirmed
// Preparing Food
// Out for Delivery
// Delivered
function* FoodDelivery(){

    yield "Order Confirmed"
    yield "Preparing Food"
    yield "Out for Delivery"
    yield "Delivered"
    
    


}

let booking = FoodDelivery()



console.log(booking.next().value);


 console.log(booking.next().value);
 console.log(booking.next().value);
 console.log(booking.next().value);