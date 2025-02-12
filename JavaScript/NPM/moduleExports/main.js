// Example using require
const mathUtil = require('./mathUtil');
const result1 = mathUtil.add(5, 3);
console.log(result1); // Output: 8
const result2 = mathUtil.subtract(10, 4);
console.log(result2); // Output: 6

// Example using import
import { add, subtract } from './improvedMathUtil.js';
const result3 = add(5, 3);
console.log(result3); // Output: 8
const result4 = subtract(10, 4);
console.log(result4); // Output: 6

