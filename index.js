// HOC 
// MAP FILTER REDUCE
//  SCOPE CHIAN 
//  CLOSURE + SETTIMEOUT QUESTION
// EVENT LOOP
// CALL BIND APPLY
// DEEP VS SHALLOW

// HOF- HIGH ORDER  FUNCTION IS FUNCTION THAT TAKE A ANOTHER FUNCTION AS A AGRUMENT AND RETURN A FUNTION AS ITS RESULT
// e.i- map,filter reduce 

// MAP- transform the array each and every value and return new array from it is knows as map function

// const arr=[2,3,4,5]
// const output =arr.map((x)=> x*5)
// console.log(output)

//FILTER- filter the value from the array according to condition and return a array

// const output =arr.filter((x)=>x%2===0)
// console.log(output)

// REDUCE- reduce method apply on array and it gives only single values 

// const  output = arr.reduce((acc,curr)=>{
//   return acc + curr
// },0)
// console.log(output)

let students =[
  {name:"ANKIT",rollNumber:30,marks:98},
  {name:"NEETESH",rollNumber:20,marks:78},
  {name:"SHIVAM",rollNumber:10,marks:57},
];

//Q-1 return only name of student in capital letter 

// for loop 
// let names=[];
// for (let i=0; i<students.length; i++){
//   names.push(students[i].name.toUpperCase())
// }
// console.log(names)

// forreach

// const  names =[];
// students.forEach((stu)=>{
//   names.push(stu.name.toUpperCase())
// })
// console.log(names)

// map
// const output =students.map((x)=> x.name.toUpperCase())
// console.log(output)

// we want to details who scored more than 60 marks 

// const output =students.filter((x)=>x.marks >60 )
// console.log(output)

// now i get only students marks >60 and rollNumber >15

// const output = students.filter((x)=>{
//   return x.marks>60 && x.rollNumber>10
// })
// console.log(output)

// SUM OFF TOTAL STUDENT MARKS 

// const output =students.reduce((acc,curr)=>{
//   return acc+curr.marks
// },0)
// console.log(output)

// print total marks of student with gratert than 60 after 20 marks added to those sstudent who scored less than 60

// const output = students.map((student)=>{
//   if(student.marks <60){
//     student.marks +=20;
//   }
//   return student;
// }).filter((student)=> student.marks >60).reduce((acc,curr)=>{
//   return acc+curr.marks
// },0)

// console.log(output)

// COUNT EMPLYEES YEARS 

var employees = [

  {

    id: 111,

    name: "Chelsea Foster",

    years: 7,

  },

  {

    id: 102,

    name: "Aggie Sparling",

    years: 13,

  },

  {

    id: 123,

    name: "Timmy Matthews",

    years: 23,

  },

  {

    id: 119,

    name: "Emmet Foster",

    years: 22,

  }

];

// // FIND ONLY IN MEMBERS POSITION IS INTERN
var members =

[

  {

    id: 111,

    name: "Chelsea Foster",

    position: "Intern",

  },

  {

    id: 102,

    name: "Aggie Sparling",

    position: "Employee",

  },

  {

    id: 123,

    name: "Timmy Matthews",

    position: "Intern",

  },

  {

    id: 66,

    name: "Emmet Foster",

    position: "Employee",

  }

];

const MeFil =members.filter((x)=>x.position === "Intern")
console.log(MeFil)

const AgeC =employees.reduce((acc,curr)=>{
acc=acc+curr.years
// acc=acc+curr.id
return acc
},0)
console.log(AgeC)


// COUNT PETS COMES HOW MANY TIMES
var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
const petCount =pets.reduce((acc,curr)=>{
  if(acc[curr]){
    acc[curr] =++ acc[curr]
  }
  else{
    acc[curr]=1
  }
  return acc;
},{})
console.log(petCount)

// data find out with conutry name and status TRUE
const data=[
  {
    name: 'Paul',
    country: 'Canada',
    status:0,
  }, {
    name: 'Lea',
    country: 'Italy',
    status:1,
  }, {
    name: 'John',
    country: 'Italy',
    status:0,
  }
]

const opD= data.filter((x)=>x.country ==="Italy" && x.status == true)
console.log(opD)


//  SCOPE CHIAN 

// Global scope
const globalVar = 'I am global';

function outerFunction() {
  const outerVar = 'I am outer';

  function innerFunction() {
    const innerVar = 'I am inner';
    console.log(innerVar); // Accessing innerVar directly
    console.log(outerVar); // Accessing outerVar through scope chain
    console.log(globalVar); // Accessing globalVar through scope chain
  }

  innerFunction();
}

outerFunction();

//  CLOSURE + SETTIMEOUT QUESTION

// function X (){
//   var a=1;
//   setTimeout(()=>{
//     console.log(a)
//   },1000)
// }
// X()

// function X (){
//   for (var i=0; i<=5;i++){
//     setTimeout(()=>{
//       console.log(i)
//     },i*1000)
//   }
// }
// X() // var is globbed scopre varribale it not not create new copy of i it same momory location

function X (){
  for (let i=0; i<=5;i++){
    setTimeout(()=>{
      console.log(i)
    },i*1000)
  }
}
X() // let is blocked scope varriable create new copy every time when loop s execute 


// EVENT LOOP- 
// The event loop is a fundamental concept in JavaScript  Its responsible for handling asynchronous operations and maintaining the execution order of code.

console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 0);
console.log('End');



// DEEP VS SHALLOW

//DEEP COPY- USED FOR COPY NESTED OBJECT (in case of deep copy it copying the value not  memory location)

let obj ={
  name:"ankit",
  address:{
    city:'kanpur',
    state:'Up'
  }
}

let user = JSON.parse(JSON.stringify(obj));
user.address.city ="durgapur"
user.name="GOLU"
console.log(obj)
console.log(user)


// shallow copy - inshallow copy just copy for main object(in case of shallow copy only copying the memory location)

let obj1 ={
  name:"NEETESH"
}
 let user1 = Object.assign({},obj)
 let user2 ={...obj1}
 user2.name ="SHIVAM"
console.log(user1)