
// # JavaScript Test 

// ## Complete all questions to the best of your abilities. You can use google, but you cannot ask other students or teachers for help. Also, do not copy code. 

// 1. Write a program to display the city name if the string begins with "Los" or "New" otherwise return "The city name does not begin with Los or New".
const losOrNew = str => str.startsWith("Los") || str.startsWith("New") ?
    str : "The city name does not begin with Los or New";

console.log(
    losOrNew("Lo Santos")
);


// 2. Write a program to calculate the sum of three elements of a given array of integers. The length of the array must be 3.  
// Example
// [5, 10, 15] ➞ 30
const totalSum = arr => arr.reduce((acc, val) => acc + val);

console.log(
    totalSum([5, 10, 15])
);

// 3. Given two strings, firstName and lastName, return a single string in the format "last, first".
// Examples
// "John", "Doe" ➞ "Doe, John"
// "Mary", "Green" ➞ "Green, Mary"
const lastFirst = str => `${str.split(", ")[1]}, ${str.split(",")[0]}`

console.log(
    lastFirst("John, Doe")
);

// 4. Write a program that checks whether or not an integer is divisible by 100.
// Examples & Expected Output
// 1 ➞ false
// 1000 ➞ true
// 100 ➞ true
const div100 = num => num % 100 === 0;

console.log(
    div100(99)
);

// 5. Write a program that adds a string ending to each member in an array.
// Examples & Expected output
// ["clever", "meek", "hurried", "nice"], "ly"
// ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
const strEnding = arr => arr.map(str => str + "ly");

console.log(
    strEnding(["clever", "meek", "hurried", "nice"])
);

// ["new", "pander", "scoop"], "er"
// ➞ ["newer", "panderer", "scooper"]

// ["bend", "sharpen", "mean"], "ing"
// ➞ ["bending", "sharpening", "meaning"]

// 6. Write a program that checks whether a number is even or odd and returns "even" for even numbers and "odd" for odd numbers.
// Examples & Expected Output
// 3 ➞ "3 is odd"
// 146 ➞ "146 is even"
// 19 ➞ "19 is odd"
const evenOrOdd = num => num % 2 === 0 ? `${num} is even` : `${num} is odd`;

console.log(
    evenOrOdd(30)
);

// 7. Make a variable with the string value of "maria jane jones". Convert each first letter to uppercase. Make sure your code works for any three names e.g. "john james smith".
const firstUpper = str => str.split(" ").map(x => x[0].toUpperCase() + x.slice(1)).join(" ");

console.log(
    firstUpper("maria jane jones")
);

// 8. You are given 2 out of 3 of the angles in a triangle in degrees. Write a program that classifies a missing angle of a triangle as either "acute", "right", or "obtuse" based on its degrees.

// An acute angle is one smaller than 90 degrees.
// A right angle is one that is exactly 90 degrees.
// An obtuse angle is one greater than 90 degrees (but smaller than 180 degrees).
// For example: 11, 20 should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.

// Examples
// 27, 59 (29 + 59 = 88), (180 - 88 = 92) ➞ Then the third angle is 92degrees so it is "obtuse" 
// 135, 11 ➞ The third angle is "acute"
// 45, 45 ➞ The third angle is a "right angle"
const triangle = (d1, d2) =>
    180 - (d1 + d2) === 90 ? "Rigth" :
        180 - (d1 + d2) < 90 ? "Acute" : "Obtuse";

console.log(
    triangle(70, 20)
);

// 9. Write a program that takes a string and returns the word count. The string should be a sentence.
// Examples & Expected output
// "This is an example" ➞ 4
// "One more example for good measure" ➞ 6
// "JavaScript is fun, right?" ➞ 4
const countWords = str => str.split(" ").length;

console.log(
    countWords("This is an example")
);

// 10. Write a program to multiply each value in an array by the length of the array. Return the result as shown in the examples.
// Examples
// [2, 3, 1, 0] (2 * 4), (3 * 4), (1 * 4), (0 * 4) ➞ [8, 12, 4, 0] 
// [4, 1, 1] ➞ [12, 3, 3]
// [1, 0, 3, 3, 7, 2, 1] ➞  [7, 0, 21, 21, 49, 14, 7]
// [0] ➞ [0]

const multiplyArrLength = arr => arr.map(num => num * arr.length);

console.log(multiplyArrLength([2, 3, 1, 0]));

