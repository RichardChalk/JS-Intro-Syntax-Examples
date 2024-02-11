// VARIABLES - VARIABLES - VARIABLES - VARIABLES - VARIABLES - VARIABLES - VARIABLES -
// VARIABLES - VARIABLES - VARIABLES - VARIABLES - VARIABLES - VARIABLES - VARIABLES -
// VARIABLES - VARIABLES - VARIABLES - VARIABLES - VARIABLES - VARIABLES - VARIABLES -
// VARIABLES - VARIABLES - VARIABLES - VARIABLES - VARIABLES - VARIABLES - VARIABLES -

// 'var' - Is function scoped... try to avoid using 'var'
var ageVar = 30;

// use 'let' instead
let ageLet = 30;
console.log('When using "let" the age varianle CAN be edited');

const ageConst = 30;
console.log('When using "const" the age variable CANNOT be edited');

// Primitive data types
const name = 'Richard';
const myDecimalNum = 45.2;
const isBool = true;

// special
const x = null;
const y = undefined;

// print type of variable
console.log(typeof myNum);

// STRINGS - STRINGS - STRINGS - STRINGS - STRINGS - STRINGS - STRINGS - STRINGS -
// STRINGS - STRINGS - STRINGS - STRINGS - STRINGS - STRINGS - STRINGS - STRINGS -
// STRINGS - STRINGS - STRINGS - STRINGS - STRINGS - STRINGS - STRINGS - STRINGS -
// STRINGS - STRINGS - STRINGS - STRINGS - STRINGS - STRINGS - STRINGS - STRINGS -

// Concatenation
console.log('My name is ' + name + ' and I live in Sweden');

// Template string
console.log(`My name is ${name} and I live in Sweden`);

// Length
const s = 'hello world';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5).toUpperCase());

// A string can be split
const textToSplit = 'hello fool';
console.log(textToSplit.split(''));

const anotherTextToSplit = 'one, two, three';
console.log(anotherTextToSplit.split(', '));

// ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS -
// ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS -
// ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS -
// ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS -

const myNumbers = new Array('1,2,3,4,5');
console.log(myNumbers);

const myFruits = ['apple', 'pear', 'banana'];
myFruits[3] = 'grapes';				// add at index 3 (end in this case)
myFruits.push('mangos');			// adds one or more elements to the end       of an array and returns the new length of the array
myFruits.unshift('strawberries');	// adds one or more elements to the beginning of an array and returns the new length of the array
myFruits.pop();						// removes the last  element from an array and returns that element
myFruits.shift('strawberries');		// removes the first element from an array and returns that element

console.log(myFruits);
console.log(myFruits.indexOf('grapes'));

// OBJECTS - OBJECTS - OBJECTS - OBJECTS - OBJECTS - OBJECTS - OBJECTS - OBJECTS -
// OBJECTS - OBJECTS - OBJECTS - OBJECTS - OBJECTS - OBJECTS - OBJECTS - OBJECTS -
// OBJECTS - OBJECTS - OBJECTS - OBJECTS - OBJECTS - OBJECTS - OBJECTS - OBJECTS -
// OBJECTS - OBJECTS - OBJECTS - OBJECTS - OBJECTS - OBJECTS - OBJECTS - OBJECTS -

const myPerson = {
    name: 'Richard',
    gender: 'Male',
    age: 51,
    hobbies: ['LOL', 'movies', 'bowling'],
    address: {
        street: 'Blåsippsbacken 29',
        postcode: 16245,
        city: 'Välingby'
    }
}

// If I want to access my least favourite hobby....
const lastHobby = myPerson.hobbies[2];

// If I want to access my postcode....
const myPostCode = myPerson.address.postcode;

// I can also add to the object
myPerson.email = 'barmybrit@gmail.com'



// An array of objects
const toDoList = [
    {
        id: 1,
        job: 'Take out the rubbish',
        done: true
    },
    {
        id: 2,
        job: 'Hoover the living room',
        done: false
    },
    {
        id: 3,
        job: 'Cut the grass',
        done: true
    }
]

// What is the third job?
const thirdJob = toDoList[2].job;

/////////////////////////////////////////////////////////////////////////
// Create a new class
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

// Create 2 new objects from our new class 'Car'
let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);

/////////////////////////////////////////////////////////////////////////
// FILTER

// Using NORMAL function
let myArray2 = [1, 2, 3, 4, 5, 6];
let filtered2 = myArray2.filter(myFunc);

function myFunc(num) {
    if (num > 2) return num;
}
// Returns 3,4,5,6

// Using ARROW function
let myArray3 = [1, 2, 3, 4, 5, 6];
let filtered3 = myArray3.filter(item => item > 2);
// Returns 3,4,5,6

/////////////////////////////////////////////////////////////////////////
// MAP
// The map() method creates a new array populated with the results of 
// calling a provided function on every element in the calling array.

// Using NORMAL function
let myArray4 = [1, 2, 3, 4, 5, 6];
let mapped4 = myArray4.map(myFunction);

function myFunction(num) {
    return num * 10;
}
// Returns 10,20,30,40,50,60


// Using ARROW function
const myArray5 = [1, 4, 9, 16];
const mapped5 = myArray5.map(num => num * 10);
// Returns 10,40,90,160

// .JSON -  .JSON -  .JSON -  .JSON -  .JSON -  .JSON -  .JSON -  .JSON - 
// .JSON -  .JSON -  .JSON -  .JSON -  .JSON -  .JSON -  .JSON -  .JSON - 
// .JSON -  .JSON -  .JSON -  .JSON -  .JSON -  .JSON -  .JSON -  .JSON - 
// .JSON -  .JSON -  .JSON -  .JSON -  .JSON -  .JSON -  .JSON -  .JSON - 

// A .JSON file is similar to an array of Javascript objects!
// We can convert our array of Javascript objects to a .JSON file
const toDoListJSON = JSON.stringify(toDoList);

// LOOPS - LOOPS - LOOPS - LOOPS - LOOPS - LOOPS - LOOPS - LOOPS - LOOPS -
// LOOPS - LOOPS - LOOPS - LOOPS - LOOPS - LOOPS - LOOPS - LOOPS - LOOPS -
// LOOPS - LOOPS - LOOPS - LOOPS - LOOPS - LOOPS - LOOPS - LOOPS - LOOPS -
// LOOPS - LOOPS - LOOPS - LOOPS - LOOPS - LOOPS - LOOPS - LOOPS - LOOPS -

// FOR===================================================
for (let i = 0; i < 10; i++) {
    console.log(`FOR Loop number: ${i}`);
}

// WHILE=================================================
let i = 0;
while (i < 10) {
    console.log(`WHILE Loop number: ${i}`);
    i++;
}

// LOOP THROUGH ARRAY====================================
for (let i = 0; i < toDoList.length; i++) {
    console.log(`To do jobs: ${toDoList[i].job}`);
}

// FOREACH===============================================
toDoList.forEach(function (jobsToPrint) {
    console.log(jobsToPrint.isCompleted);
});

// RETURNS AN ARRAY======================================
const toDoText = toDoList.map(function (jobsToPrint) {
    return jobsToPrint.job;
});
console.log(toDoText);

// RETURN AN ARRAY OF COMPLETED JOBS=====================
const todoCompleted = toDoList.filter(function (todo) {
    return todo.isCompleted === true;
}).map(function (todo) {
    return todo.job;
})

// FUNCTIONS - FUNCTIONS - FUNCTIONS - FUNCTIONS - FUNCTIONS - FUNCTIONS -
// FUNCTIONS - FUNCTIONS - FUNCTIONS - FUNCTIONS - FUNCTIONS - FUNCTIONS -
// FUNCTIONS - FUNCTIONS - FUNCTIONS - FUNCTIONS - FUNCTIONS - FUNCTIONS -
// FUNCTIONS - FUNCTIONS - FUNCTIONS - FUNCTIONS - FUNCTIONS - FUNCTIONS -

// NORMAL FUNCTION=========================================
function sum(num1, num2) {
    return num1 + num2;
}
sum(1, 3);

// ARROW FUNCTIONS=========================================

// Traditional Function
function myFunc(a) {
    return a + 100;
}

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
    return a + 100;
}

// 2. Remove the body braces and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;

////////////////////////////////////////////////////////////

// Example #1 - NORMAL
function sum(a, b) {
    return a + b;
}

// Example #1 - ARROW
let sum2 = (a, b) => a + b;

// Example #2 - NORMAL
function isPositive(number) {
    return number >= 0;
}

// Example #2 - ARROW
let isPositive2 = number => number >= 0;

// Example #3 - NORMAL
function randomNumber() {
    return Math.random;
}

// Example #3 - ARROW
let randomNumber2 = () => Math.random;

// Example #4 - NORMAL
document.addEventListener('click', function () {
    console.log('Button was clicked')
})

// Example #4 - ARROW
document.addEventListener('click', () => console.log('Button was clicked'))

