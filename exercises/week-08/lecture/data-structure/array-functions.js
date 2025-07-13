/*
* Array functions: 
Push(value): Add value to the end of an array
pop(): remove last array element 
unshift(value): Add value to the beginning of an array
shift(): remove first array element
splice(startIndex, numElemtoDel, valuesToAdd)
indexOf(value): search from the start of an array the first index of the value
lastIndexOf(value): search from the end of an array the last index of the value
*/
let numbers = [];

console.log(`Numbers: ${numbers}`);

numbers.push(5);
numbers.push(10);
console.log(`Numbers: ${numbers}`);

numbers.unshift(8);
numbers.unshift(26);
console.log(`Numbers: ${numbers}`);

let x = numbers.pop();
console.log(`${x} is removed, the remaining Numbers: ${numbers}`);
x = numbers.shift();
console.log(`${x} is removed, the remaining Numbers: ${numbers}`);

let num = [1,2,3,4,5,6,7,8,9];
console.log(`number array: ${num}`);
num.splice(1,2);    //2,3 are removed.
console.log(`Number array after spliced: ${num}`);
let new_num = [24,25,26];
num.splice(4,0,new_num); // add from index 4 the new_num array
console.log(`Number array after spliced: ${num}`);

let fruits = ['apple', 'grape', 'pear', 'apple', 'orange', 'durian'];
console.log(`Fruits: ${fruits}`);
console.log(`First index of apple: ${fruits.indexOf('apple')}`);
console.log(`Index of apple: ${fruits.lastIndexOf('apple')}`);