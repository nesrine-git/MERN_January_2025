// Problem 1:
const olderThan18 = age =>  age >= 18 ? "You are good to go!" : "Sorry! You must be 18 or older!";
   
// Problem 2: with explicit return
// const currentlyRaining = () => {
//     const isRain = true;
//     return isRain ? "Get your rain jacket!" : "No rain on today's forecast!";
// }

// Problem 2: with implicit return
const currentlyRaining = () => true ? "Get your rain jacket!" : "No rain on today's forecast!";

console.log(currentlyRaining())

// Problem 3:
const isEven = num => (num % 2 === 0) ? "That's an even number!" : "That's an odd number!";

// Problem 4:
const greaterThan = (num1, num2) => (num1 > num2) ? `${num1}  is more than ${num2}` : `${num1} is less than ${num2}`;



