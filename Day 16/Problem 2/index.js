// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image 
// of the original. Write a function that appends the reversed version of the original string to itself.

function mirrorString(str) {
    // Reverse the original string
    let reversedStr = str.split('').reverse().join('');
    // Append 
    let mirroredStr = str + reversedStr;
    return mirroredStr;
}

let originalString = "example";
let mirroredString = mirrorString(originalString);
console.log(mirroredString); // Output: "exampleelpmaxe"