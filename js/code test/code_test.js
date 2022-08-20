// VARIABLES
// Create a variable name call peopleNum and assign a value 3 
// Use console.log to call the display peopleNum
// Reassign the value to 5

let peopleNum = 3;

console.log(peopleNum)

peopleNum = 5;

console.log(peopleNum)

// FUNCTION
// Create a function call getTotalNum and return 5 
// Call the function 
// Create a function call calculateSum and pass in two arguments which call num1 and num2 inside the function add  num1 and num2 and return the result
// Create a function A which accepts another function B and inside A function call B function 
// Create an arrow function getTotalNum and return 5
// Call the arrow function

function getTotalNum(){
    return 5;
}
getTotalNum();

function calculateSum(num1, num2){
    return num1 + num2
}

function testA(content){
    console.log(content);
}
function testB(func, content){
    func(content);
}
testB(testA, "HelloWorld");

getTotalNum =()=>{
    return 5;
}
getTotalNum();


// CLASS
// Create an class with 1 property and 1 function 
// Create an object from the class 
// Display the property using console.log
// Call the function 
class Game {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let myGame = new Game("OverWatch", 2016);
console.log('my favorite game is '+ myGame.name + ' and I have been playing for ' + myGame.age() +' years')

// OBJECT
// What is … in javascript 

console.log('Spread syntax')


// What will this return {...data, [e.target.name]: e.target.value}, if data = {"name": 'ss'} and e.target.name = ‘name’ and e.target.value = ‘kk’ ? 
{
    name:'ss'
    name:'kk'
}


// What will this return {data, [e.target.name]: e.target.value}, if data = {"name": 'ss'} and e = {target: {name: 'dd', value: 1}} ? 
{
    data:{
        name:'ss'
    }
    dd:1
}


// KEYWORD
// What is the different between const, let, var ?

{`var: 
The scope of a var variable is functional scope.
It can be updated and re-declared into the scope.	
It can be declared without initialization.	
It can be accessed without initialization as its default value is “undefined”.	
`}

{`let: 
The scope of a let variable is block scope.	
It can be updated but cannot be re-declared into the scope.	
It can be declared without initialization.	
It cannot be accessed without initialization, as it returns an error.	
`}

{`const: 
The scope of a const variable is block scope.
It cannot be updated or re-declared into the scope.	
It cannot be declared without initialization.
It cannot be accessed without initialization, as it cannot be declared without initialization.
`}

// What is the difference between a arrow function and an normal function ? 
{` 
Syntax
Arguments binding
Use of this keyword
Using a new keyword
`}

// What is async vs sync?
{`
Async is multi-thread, which means operations or programs can run in parallel. 
Sync is single-thread, so only one operation or program will run at a time. 
`}
