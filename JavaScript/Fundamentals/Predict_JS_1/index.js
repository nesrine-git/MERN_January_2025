//Problem 1: 
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars  // Gets the first element : 'Tesla'
const [ ,otherRandomCar ] = cars // Skips the first, gets the second : 'Mercedes'

//Predict the output
console.log(randomCar) // output: Tesla
console.log(otherRandomCar) // output: Mercedes

//How would you get the index value that did not output? 
const [,, thirdCar] = cars; // Skips first and second, gets third
console.log(thirdCar);       // Output: Honda

/***********************************************************************************************************/
// Problem 2:
const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee; // Renames employeeName to otherName

console.log(otherName); //output: 'Elon'
console.log(employeeName); //output: Error: employeeName is undefined, 
// employeeName is renamed and is no longer available, so trying to log it results in an error

//What would you need to do to solve any potential problems?
// 1. without remane :
const { employeeName } = employee;
console.log(employeeName); // Output: 'Elon'
// 2. with remane :
const { employeeName: otherName } = employee;
console.log(employee.employeeName); // Output: 'Elon'

/**************************************************************************************************************/

//Problem 3:
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Why did the code produce that output?
console.log(password); // output: 12345  "password is a separate variable."
console.log(hashedPassword); //output: undefined ::::: hashedPassword is trying to destructure password from person, 
                                                      //but person doesn't have a password property.
//How would you alter this code without changing either console.log? : Add password to the person object. 

/**********************************************************************************************************/

//Problem 4:
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Why did the code produce that output?
console.log(first === second); //output: 2 === 5 : false
console.log(first === third); //output:  2 === 2 : true
//Declare a new variable for the value at the 4th index of the array and console.log it.
const [,,,fourth] = numbers;
console.log(fourth); // Output: 6

/***********************************************************************************************************/

// Problem 5:
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Why did the code produce that output?
console.log(key); //output: key is assigned the string 'value'
console.log(secondKey); //output: secondKey is assigned the array [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); //output: refers to the first element at index 0 : 1
console.log(willThisWork); //output: willThisWork is assigned the second element of secondKey at idex 1 via array destructuring :5
//Console.log the last value in the secondKey property's array.
console.log(secondKey[secondKey.length - 1]); // Output: 3

/***********************************************************************************************************/

// Problem 6:
var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);
// There is a global scope and three local scopes.
// global scope's output : Paul was found at index 0
//                         George was found at index 1
//                         John was found at index 2
//                         Ringo was found at index 3
//                         name and index after loop is Ringo:4
// The first local scope is printNames function 
  // output : Paul was found at index 0
//            George was found at index 1
//            John was found at index 2
//            Ringo was found at index 3
//            name and index after loop is Ringo: 4
     
// The second local scope is actuallyPrintingNames function 
   // output : Paul was found at index 0
//             George was found at index 1
//             John was found at index 2
//             Ringo was found at index 3
//             name and index after loop is Ringo:4
// The third local scope is for loop 
   // output: Paul was found at index 0
//             George was found at index 1
//             John was found at index 2
//             Ringo was found at index 3
/*************************************************************************************************************/
//Problem 7:
function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      let name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  } 
// No output because actuallyPrintingNames function isn't invoked.

/****************************************************************************************************************/

// Problem 8:
const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.log(name + ' was found at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);
//Predicted output :
  //  Paul was found at index 0
  //  George was found at index 1
  //  John was found at index 2
  //  Ringo was found at index 3

//Why ? :
  // The global array beatles is declared using const, meaning it cannot be reassigned, but its elements can still be accessed and modified.
  // The function printNames(names) takes an argument and passes it to actuallyPrintingNames().
  // Inside actuallyPrintingNames(), a for loop iterates over the names array:
  // let index ensures index is block-scoped.
  // const name ensures each name variable cannot be reassigned, maintaining its value for each loop iteration.
  // Each name is logged with its index.

//No errors occur :
  // let index is block-scoped and only exists inside the loop.
  // const name is block-scoped and resets on each iteration, preventing accidental reassignment.

//Justification for Each Keyword :
  // const beatles: used because the array reference should not change.
  // let index: used because index changes on each loop iteration. It is only accessible inside the for loop (Block-scoped).
  // const name: used because name does not change within each loop iteration. Prevents accidental reassignment (Block-scoped).

/******************************************************************************************************************/

//Problem 9:
const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
            composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) // true 
console.log(planet === planetCopy) //false

//Explanation :
  // 1. true : Both planet and planetCopy share the same array reference for composition,
  //  so planet.composition[0] and planetCopy.composition[0] point to the same value ("gas").
  // 2. false : Even though both objects have the same data, they are different objects. 
  // The spread operator creates a new object, so planet and planetCopy are not the same object.




