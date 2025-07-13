/* 
* Demonstration of string operators in JavaScript
*/
let str = "I am learning JavaScript";

console.log("String: ", str);
console.log("Length: ", str.length); // length in number of characters in the string
console.log("Uppercase: ", str.toUpperCase()); // convert to uppercase
console.log("Lowercase: ", str.toLowerCase()); // convert to lowercase
console.log("Index of 'learning': ", str.indexOf("learning")); // find the index of a substring
console.log("Last index of 'a': ", str.lastIndexOf("a")); // find the last index of a character
console.log("Substring (2, 5): ", str.substring(2, 5)); // extract a substring from the string
console.log("Substring (2, 5): ", str.substring(5, 2)); // extract a substring from the string, but the start index is greater than the end index. In this case, substring will swap the start and end index.
console.log("Substr (2, 5): ", str.substr(2, 5)); // extract a substring from the string starting from index 2 with length 5
console.log("Slice (2, 5): ", str.slice(2, 5)); // extract a slice from the string
console.log("Split: ", str.split(" ")); // split the string into an array of substrings
console.log("Replace 'JavaScript' with 'JS': ", str.replace("JavaScript", "JS")); // replace a substring with another substring
console.log("Trim: ", str.trim()); // remove whitespace from both ends of the string
console.log("Starts with 'I': ", str.startsWith("I")); // check if the string starts with a substring
console.log("Ends with 'JavaScript': ", str.endsWith("JavaScript")); // check if the string ends with a substring
console.log("Includes 'learning': ", str.includes("learning")); // check if the string includes a substring
console.log("Repeat 3 times: ", str.repeat(3)); // repeat the string a specified number of times
console.log("Char at index 2: ", str.charAt(2)); // get the character at a specified index
console.log("Char code at index 2: ", str.charCodeAt(2)); // get the char code at a specified index
