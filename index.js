// =======================
// String Manipulation Functions
// =======================

// Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Count Characters
function countCharacters(str) {
  return str.length;
}

// Capitalize Words
function capitalizeWords(str) {
  return str.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
}

// =======================
// Array Functions
// =======================

// Find Maximum Value
function findMax(arr) {
  return Math.max(...arr);
}

// Find Minimum Value
function findMin(arr) {
  return Math.min(...arr);
}

// Sum of Array Elements
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Filter Array by condition (callback function)
function filterArray(arr, condition) {
  return arr.filter(condition);
}

// =======================
// Mathematical Functions
// =======================

// Factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Prime Number Check
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Fibonacci Sequence (first n terms)
function fibonacci(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

// =======================
// Example Usage
// =======================
console.log(reverseString("hello"));       // "olleh"
console.log(countCharacters("hello"));     // 5
console.log(capitalizeWords("hello world"));// "Hello World"

console.log(findMax([1, 5, 2, 9]));       // 9
console.log(findMin([1, 5, 2, 9]));       // 1
console.log(sumArray([1, 2, 3, 4]));      // 10
console.log(filterArray([1, 2, 3, 4], n => n % 2 === 0)); // [2,4]

console.log(factorial(5));                // 120
console.log(isPrime(7));                  // true
console.log(fibonacci(7));                // [0,1,1,2,3,5,8]
