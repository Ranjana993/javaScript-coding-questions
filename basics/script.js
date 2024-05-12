//  Question 1
//? Question 1 Given a string , reverse each words in the sentences

// let str = "Hello world how are you doing";
// let res = str.split(" ").map(function (word) {
//   return word.split("").reverse().join("")
// }).join(" ")
// console.log(res);



// ? Question 2 check if an object is an array or not ? provide some code
// function checkArray(el) {
//   return Array.isArray(el)
// }
// console.log(checkArray([]));
// console.log(checkArray({}))


// ? Question 3 How to emoty an array in javacript
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length);
// arr.length = 0
// console.log(arr);


//? Question 4 How would you check if a number is interger
// function checkInt(el) {
//   return (el % 1 === 0) ? "YES" : "NO"
// }
// console.log(checkInt(12));
// console.log(checkInt(12.44))



// ? Question 5 this this works
// duplicate :
//  arr = [1,2,3,4]  output should be
// arr = [1,2,3,4,1,2,3,4]

// function duplicate(arr) {
//   return arr.concat(arr)
// }
// console.log(duplicate([1, 2, 3, 4]))


// FUNCTION:

// ? Question 6  Write a javacript functon that reverse a number
// function reverseNumber(num) {
//   return Number(num.toString().split("").reverse().join(""))
// }
// console.log(reverseNumber(123456));

// function reverseNumber1(num) {
//   var ans = 0;
//   while (num > 0) {
//     var rem = num % 10;
//     ans = ans * 10 + rem;
//     num = Math.floor(num / 10);
//   }
//   return ans
// }
// console.log(reverseNumber1(123456));


// ? Question 7 write a javacript functon that checks wheter a passed string is pallindrome or not

// function checkIsPallindrome(str) {
//   var reversed = str.split("").reverse().join("")
//   return str === reversed ? "Yes" : "No"
// }
// console.log(checkIsPallindrome("loop"));



// ? Question 8  Write a javaScript function that returns a passed string with letters in alphabetical order
// function sortString(str) {
//   return str.split("").sort().join("");
// }
// console.log(sortString("apple"))



// ? Question 9 Write a javascript function that accept a  string  as a parameter and convert the first letter of each word of the string in uppercase

// function capitalize(str) {
//   var ans = str.split(" ").map(function (word) {
//     return word.charAt(0).toUpperCase() + word.substring(1)
//   })
//   console.log(ans.join(" "));
// }
// capitalize("apple  mango orange")


// ? Question 10  Write a javaScript function to get the number of occurance of each letter in specifeid string

// function occuranceStr(str) {
//   var occurance = {}
//   str.split("").forEach(function (element) {
//     if (occurance.hasOwnProperty(element) === false) {
//       occurance[element] = 1;
//     }
//     else {
//       occurance[element]++;
//     }
//   });
//   return occurance
// }

// console.log(occuranceStr("apple"))


// ? Write a javaScript function which accepts an arguments and return the type
// NOTE:  There are six possible values that typeof return object , boolean , fucniotn , number string  and undefined;



// LOOPS :

// ? loop an array and add all members of it

// var arr = [1, 2, 3, 4, 5, 6, 6];
// var sum = 0;
// arr.forEach(function (item) {
//   sum += item
// })
// console.log(sum);


// ? In an array of numbers and string only add those memebers which are not string
// var arr = ["apple", 1, 2, 3, "mango", "orange", 4]
// var sum = 0;
// arr.forEach(function (element) {
//   if (typeof element === "number") {
//     sum += element
//   }
// })
// console.log(sum);

// ? Loop an array of object and remove all objects which don't have gender's value male
// var arr = [
//   { name: "rasmi", gender: "female" },
//   { name: "roshni", gender: "female" },
//   { name: "mohit", gender: "male" },
//   { name: "sohit", gender: "male" },
// ]


// var res = arr.filter(function (elem) {
//   return elem.gender === "male";
// })
// console.log(res);


// ? Write a javaScript function which accepts an arguments and return the type
//? NOTE: there are six possible values that types return : object , boolean , function , number ,string  and undefined

// function typeTeller(arg) {
//   return typeof arg
// }

// console.log(typeTeller("abs"));
// console.log(typeTeller(12));
// console.log(typeTeller([]));
// console.log(typeTeller({}));



// ? Write a javaScript function to get the first element of an array . Passing a parameter 'n' will return the first 'n' element of the array

// function retriveItem(arr, n = 1) {
//   if (n <= arr.length) {
//     for (var i = 0; i < n; i++) {
//       console.log(arr[i]);
//     }
//   }
//   else {
//     console.log("Not available ");
//   }
// }
// retriveItem([1, 2, 3, 4, 5], 3)

// ? Write a javaScript function to get the first element of an array . Passing a parameter 'n' will return the last 'n' element of the array

// function retriveItemEnd(arr, n = 1) {
//   if (n <= arr.length) {
//     for (var i = 0; i < n; i++) {
//       console.log(arr[arr.length - 1 - i]);
//     }
//   }
//   else {
//     console.log("Not available ");
//   }
// }
// retriveItemEnd([1, 2, 3, 4, 5], 3)


// ? Write a javaScript program to find the most frequest item of an array

// function mostFrequentItem(arr) {
//   var freq = {};
//   arr.forEach(function (i) {
//     if (freq.hasOwnProperty(i)) {
//       freq[i]++;
//     }
//     else {
//       freq[i] = 1;
//     }
//   })


//   var res = Object.keys(freq).reduce(function (acc, num) {
//     return freq[acc] > freq[num] ? acc : num
//   })
//   console.log(res);
// }
// mostFrequentItem([1, 2, 3, 4, 5, 4, 3, 5, 6, 6, 6, 6, 6, 3, 3]);



// ? write a javaScript prograam to shuffle an array
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

console.log(shuffleArray([1, 2, 3, 4, 5]));

