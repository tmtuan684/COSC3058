/**
 * key/value pairs in map objects are traversed by for..in loop
 */
let courses = {
    'ISYS2101': 'Software Engineering Project Managment',
    'ISYS3414': 'Practical Database Concepts',
    'COSC3058': 'Web Programming Bootcamp',
    'COSC3060': 'Web Programming Studio',
    'SampleCode': 'Placeholder'
};

for(code in courses) {
    console.log(`${code} - ${courses[code]}`);
}

// for(item of courses) {  //courses is not an array and not iterable therefore, cannot be traversed by for..of
//     console.log(item); 
// }

console.log(`All keys in courses: ${Object.keys(courses)}`);

// Check if a key is in an object
let x = 'ISYS210';
if (x in courses) {
    console.log(`${x} is the course ${courses[x]}`); 
}
else {
    console.log(`${x} does not exist`);
}

delete courses['SampleCode'];

let course_map = new Map(); // Map is convenient key:value pair class of objects with convenient methods
course_map.set('CS01', 'Machine Learning');
course_map.set('CS02', 'Deep Learning');
course_map.set('CS03', 'Artificial Intelligence');

console.log(`There are ${course_map.size} courses`);
for([key, value] of course_map) {
    console.log(`${key} - ${value}`);
}

let y = 'CS01';
if (course_map.has(y)) {
    console.log(`${y} is the course ${course_map.get(y)}`); // similar to course_map[y]
}
else {
    console.log(`${y} does not exist`);
}

