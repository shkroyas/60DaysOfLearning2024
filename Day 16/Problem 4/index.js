// The Sum Selector: You are working on a function that should sum all numbers in an array until
// it encounters a negative number. Write a function that performs this summation.

function sumUntilNegative(arr) {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            break; // Exit the loop 
        }
        sum += arr[i];
    }
    
    return sum;
}

let numbers1 = [1, 2, 3, -1, 5, 6];
let numbers2 = [4, 5, 6, 7];
let numbers3 = [10, -2, 3, 4];

console.log(sumUntilNegative(numbers1)); 
console.log(sumUntilNegative(numbers2)); 
console.log(sumUntilNegative(numbers3)); 