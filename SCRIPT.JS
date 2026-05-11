// //Section 1: Variables (1–8)
// // 1 What is the output?
// var a = 10;
// a = 15;
//  console.log(a);
//  // ans:out put is 15
// //  // 2 What happens here?
// // let b = 20;
// //  let b = 30;
// // // ans:it is error because not accept redeclration
// //  // 3 What is the output?
//  const c = 50;
//   console.log(c);
// //  // ans:50
// //  // 4 Identify error:
// //  const x = 10;
// //  x = 20;
// // // ans:error is it can not reuse and reintialiaziation
//  // 5 Output?
//      var p = 5;
//      var p = 10;
//       console.log(p);
// //  //ans:10
//  // 6 Output?
//     let q = 25;
//       q = q + 10;
//       console.log(q);
// // // ans:35
// // 7 Output?
//  const r = 7;
//  console.log(r + 3);
//   // ans:10
//  // 8 Fill correct keyword:
// // ans: var a = 10;

//  //🟢 Section 2: Console Methods (9–12)

//  // 9 Which method prints normal output?
//     // console.log()
//  // 10 Which method shows warning?
//     //    console.warn()
//  // 11 Which method shows error?
//    // console.error()
// // // 12 What does this do?
// // console.clear();
//  //ans: it will clear all the data
//  //🟢 Section 3: Data Types (13–18)
//  // 13 Output?
//    // let a = "hello";
//    //  console.log(typeof a);
//   // ans:string
//  // 14 Output?
//     let b = 100;
//     console.log(typeof b);
//  // ans:number
//  //15 Output?
//  // let c = false ;
//  // console.log(typeof c);
// // // ans:boolean
// // // 16 Output?
//  let d;
//  console.log(d);
//  // ans:undefined
//  //17 What is type of null?
//  // ans:null is primitive data type 
//   // 18 Convert string to number:
//    //"25"
//  let str = "25";

//  let num = Number(str);
// console.log(num);

// //🟢 Section 4: Arrays (19–24)
//  // 19 Create array of 3 fruits.
//  let fruits=["apple","orange","giwi"]
// console.log(fruits)
//  // 20 Output?
//  let arr = ["a","b","c"];
//  console.log(arr[1]);
//   //ans:b
//  // 21 Output?
//  //let arr = ["x","y","z"];
//  //console.log(arr[arr.length-1]);
// // //ans:z 
//   // 22 How to get first element?
//  console.log(arr[0])
//  // 23 Output?
//  //let arr = ["apple","banana"];
// // console.log(arr.length);
//  //ans:2
// // //24 Add new element to array.
//  //let fruits = ["Apple", "Banana"];

// //fruits.push("Mango");

// // console.log(fruits);
// // //🟢 Section 5: Objects (25–28)
//  //25 Create object with name & age.
// let detials={
//     name:"ravi",
//     age: 23
//  };
//  console.log(detials);
//  //26 Output?
//  let obj = {name:"Naveen"};
//  console.log(obj.name);
//  //ans:Naveen
//  //27 Output?
//  //let obj = {
//   // fruits: ["apple","banana"]
// // };
//  //console.log(obj.fruits[1]);
//  //ans:banana
//  //28 How to access last element inside object array?
//  let students = [
//    { name: "Bilal", age: 21 },
//    { name: "Rahul", age: 22 },
//    { name: "Aman", age: 23 }
//  ];

//  let lastElement = students[students.length - 1];

//  console.log(lastElement);

// //🟢 Section 6: Arithmetic Operators (29–32)
//  //29 Output?
//  console.log(5 + 3);
//  //ans:8
//  // 30 Output? 
//   console.log(10 % 3);
//   //ans:1
 
//  //31 Output?
//  console.log(2 ** 3);
//  //ans:8
//  // 32 Output?
//  console.log(10 / 2);
// // //ans:5
//  //🟢 Section 7: Increment / Decrement (33–36)
//  // 33 Output?
//  //let a = 5;
//   //   a++ ;
//  //console.log(a);
// // //ans:6
//  // 34 Output?
//  //let b = 5;
//  //let c = b++;
//  //console.log(b, c);
//  // ans:6,5
//  //35 Output?
// // let x = 5;
// // let y = ++x;
// // console.log(x, y);
//  // ans:6,6
//  // 36 Output?
// // let m = 3;
// // let n = m--;
// // console.log(m, n);
//  // ans:2,3
//  //🟢 Section 8: Comparison & Logical (37–39)
// // 37 Output?
// console.log(5 == "5");
// // ans:true
//  // 38 Output?
//  console.log(5 === "5");
//  //ans:false
//  // 39 Output?
//  console.log(true && false || true);
// //ans: true
//  //🟢 Section 9: Ternary (40)
// // 40 Output?
//  5 > 3 ? console.log("Yes") : console.log("No");
//  //ans:yes


// JavaScript Tasks – Type Casting & Flow Control
// Task 1 – Predict the Output
// Write the output and datatype for below:
    console.log("10" + 5)
    // ans:output=105,datatype=string
    console.log(10 + true)
    // ans:output=11,datatype=number
    console.log(false + null)
    // ans:output=0,datatype=number
    console.log("Hello" + undefined)
    // ans:output=Helloundefined,datatype=string
       console.log([1,2] + 5)
       // ans:output=1,25,datatype=string
// Task 2 – Implicit Type Casting
// Create examples for:
// String + Number
console.log(typeof("apple"+1))
// Boolean + Number
console.log(typeof(true+4))
// Array + String
console.log(typeof([2,3]+"orange"))
// Object + Number
console.log(typeof({s:5}+5))
// Null + Number
console.log(typeof(null+4))
// Print datatype using typeof.
// Task 3 – Explicit Type Casting
// Convert the following into Number:
// "500"
  console.log(Number("500"))
// true
console.log(Number(true))
// false
console.log(Number(false))
// null
console.log(Number(null))
// "abc"
console.log(Number("abc"))
// [100]
console.log(Number([100]))
// Print the outputs.
// Task 4 – Boolean Constructor
// Check whether below values are true or false using Boolean().
// ""
console.log(Boolean(""))
// "javascript"
console.log(Boolean("javascript"))
// 0
console.log(Boolean(0))
// 1
console.log(Boolean(1))
// null
console.log(Boolean(null))
// undefined
console.log(Boolean(undefined))
// []
console.log(Boolean([]))
// {}
console.log(Boolean({}))
// Task 5 – Student Pass or Fail
// Take one variable:
// let mark = 45
// Condition:
// Above 35 → Pass
// Below 35 → Fail
let mark = 45
if( mark > 35){
  console.log("pass")
}else{
  console.log("fail")
}
// Use if else.
// Task 6 – Voting Eligibility
// Create a variable:
// let age = 20
// Conditions:
// 18 and above → Eligible
// Otherwise → Not Eligible
let age = 20
if(age > 18){
  console.log("Eligible")
}else{
  console.log("Not Eligible")
}
// Task 7 – Greatest Number
 // Find greatest among 3 numbers using if else if.
 // Example:
 // let a = 50 
 // let b = 80 
 // let c = 30
let a = 50;
let b = 80;
let c = 30;

if (a > b && a > c) {
    console.log("A is greatest:", a);
} else if (b > a && b > c) {
    console.log("B is greatest:", b);
} else {
    console.log("C is greatest:", c);
}
// Task 8 – Traffic Light System
// Using switch statement:
// red → stop
// yellow → ready
// green → go
let trafficlight =("green")
switch (trafficlight){
  case "red" : console.log("stop");
  break;
  case "yellow" : console.log("ready");
  break;
  case "green" : console.log("go");
  break;
  default:console.log("have a nice day")
}
// Task 9 – Login System
// Create variables:
// let username = "admin"
// let password = "1234"
// Conditions:
// Both correct → Login Success
// Otherwise → Invalid Login
// Use nested if.
let username = prompt("enter your name");
let password = prompt("enter your password");

if (username === "admin") {

    if (password === "1234") {
        alert("Login Success");
    } else {
        alert("Invalid Login");
    }

} else {
    alert("Invalid Login");
}

// Task 10 – Session Finder
// Take hour value:
// let hour = 14
// Conditions:
// 1–12 → Morning
// 13–15 → Afternoon
// 16–19 → Evening
// 20–24 → Night
// Use else if.
let hour = 14
if(hour>=1 && hour<=12){
  console.log("good morning");
}else if(hour>=13 && hour<=15){
console.log("good afternoon");
}else if(hour>=16 && hour<=19){
console.log("good evening");
}else if(hour>=20 && hour<=24){
console.log("good night");
}else{
  console.log("check correct time,give");
}


// Bonus Challenge 🔥
// Predict outputs without running:
 console.log(true + true)
 console.log("5" - 2)
 console.log("5" + 2)
 console.log(null + 1)
 console.log(undefined + 1)
 console.log(Boolean(" "))
 console.log(Number(true))




