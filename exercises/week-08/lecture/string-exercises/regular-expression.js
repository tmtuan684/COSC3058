const str = "I am learning javascript";
const regex = /ava/;

let result = str.match(regex);

if (result === null) {
    console.log("No match found");
}   else {
    console.log("Match: ", result[0]); // match a regular expression against a string
}

const re = new RegExp("scr");
let result2 = re.exec(str);
if (result2 === null) {
    console.log("No match found");
}
else {
    console.log("Match: ", result2[0]); // match a regular expression against a string
}