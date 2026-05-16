// ==========================================
// 5 Real-Time JavaScript Questions
// Topic : Array + Object + HOF + Spread
// ==========================================



// 1. Student Attendance System
// Create two arrays:
// presentStudents
// absentStudents
// Merge both arrays using spread operator
// Add one new student at last
// Print final array
    let presentStudents =["Ravi","chandu","kumar"]
    let absentStudents  =["sonu","navin","prem"]

    
    
    let totalstudent =[...presentStudents,...absentStudents,"bilal"]
    console.log(totalstudent);
    
// 2. E-Commerce Cart
// Create object for mobile details
// Create another object for charger details
// Merge both objects using spread operator
// Add deliveryDate property
// Print final object
   let mobiledetails ={
      mobil:"vivo t5 pro",
      Battery : 9200,
      camera :"50px"
   }

   let  chargerdetails={
    prices :29999,
   }

   let mobiledata ={...mobiledetails,...chargerdetails,deliveryDate:18}
   
   console.log(mobiledata);
   

// 3. Food Delivery App
// Create function named orderFood()
// Accept multiple food items using rest operator
// Print:
// Total items ordered
// First item
// Last item
   function orderFood(biriyani,coolcake,icecream){
       console.log(biriyani+coolcake+icecream);
       console.log(biriyani);
       console.log(icecream);
       
       
       
   }
   orderFood(1,2,3)



// 4. Employee Salary Filter
// Create array of employee objects
// Filter employees whose salary is above 50000
// Print filtered employees
    let employeeDetials = [
    {empName : "a" , salary : 40000},
    {empName : "b" , salary : 45000},
    {empName : "c" , salary : 50000},
    {empName : "d" , salary : 60000},
    {empName : "e", salary : 750000},
    {empName : "f" , salary : 100000},
    {empName : "g" , salary : 200000}
]

let salaryDate = employeeDetials.filter((c,i,t)=>{
    return c.salary > 50000
})

console.log(salaryDate);




// 5. Online Game Score Board
// Create array of scores
// Use reduce()
// Find total score of all players
// Print final total
  GameScoreBoard = [
  { players: "a", score: 350 },
  { players: "b", score: 240 },
  { players: "c", score: 300 },
  { players: "d", score: 410 },
  { players: "e", score: 260 },
  { players: "f", score: 120 },
];




let allscore = GameScoreBoard.reduce((acc,c,i,t)=>{

    return acc + c.score

   
    
   
    

},0)


console.log(allscore);

