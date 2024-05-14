// ? 1. Write a JavaScript function to calculate the sum of two numbers.

// function calculateSum(a, b) {
//   return a + b;
// }
// console.log(calculateSum(1, 2));


// ? 2. Write a JavaScript program to find the maximum number in an array.
// function findMax(arr) {
//   return Math.max(...arr)
// }
// console.log(findMax([1, 4, 2, 3, 6, 7, 4, 9, 12]));


// ? 3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).
// function checkPallindrom(str) {
//   var rev = str.split("").reverse().join("");
//   console.log(rev);
//   if (rev === str) {
//     console.log("YES");
//   } else {
//     console.log("NO");
//   }
// }
// checkPallindrom("lool");



// ? 4. Write a JavaScript program to reverse a given string.
// function reverseStr(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseStr("ranjana"));

// ?  5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

// function countOdd(arr) {
//   return arr.filter(function (element) {
//     return element % 2 === 0
//   })
// }
// console.log(countOdd([2, 3, 4, 5, 1, 9, 7, 6]));


// ? 6. Write a JavaScript program to calculate the factorial of a given number.
// function factorialNum(num) {
//   if (num == 0 || num == 1) {
//     return 1;
//   }
//   else {
//     return num * factorialNum(num - 1)
//   }
// }
// console.log(factorialNum(5));


// ? 7. Write a JavaScript function to check if a given number is prime
// function checkPrime(num) {
//   if (num < 1) {
//     return false;
//   }
//   else {
//     for (var i = 2; i < num; i++) {
//       return num % i === 0 ? false : true
//     }
//   }
// }
// console.log(checkPrime(4));


// ? 8. Write a JavaScript program to find the largest element in a nested array.

// function findLargestElement(arr) {
//   let largest = -Infinity;
//   function checkElement(element) {
//     if (Array.isArray(element)) {
//       element.forEach(checkElement);
//     } else if (element > largest) {
//       largest = element;
//     }
//   }
//   arr.forEach(checkElement);
//   return largest;
// }

// console.log(findLargestElement([1, 5, 3, 2, 5, 6, [8, 6, 2, 3]]));


// ? 9. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

// function findFibbonachi(num) {
//   if (num <= 0) {
//     return [];
//   }
//   if (num == 1) {
//     return [0]
//   }
//   const fibb = [0, 1];
//   for (let i = 2; i < num; i++) {
//     fibb[i] = fibb[i - 1] + fibb[i - 2];
//   }
//   return fibb;
// }
// console.log(findFibbonachi(10));



// ? 10. Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).
// function convertToUpperCase(str) {
//   var ans = str.split(" ").map(function (word) {
//     return word.charAt(0).toUpperCase() + word.substring(1);
//   })
//   return ans.join(" ");
// }
// console.log(convertToUpperCase("mango orange litchi"));


