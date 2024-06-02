console.log("Javascript Loops")

let a = 1;
console.log(a)
console.log(a+1)
console.log(a+2)
//for loop
for (let i = 0; i < 5; i++) { 
    console.log(a + i); 
}
//object
let obj = {
    name: "Royas",
    role: "Programmer",
    company: "KU"
}
//for in Loop 
for (const key in obj) {  
        console.log(key)
}
//for of Loop
for (const c of "Royas") {
    console.log(c)
}
//while loop    
let k = 0;
while (k<6) {
    console.log(k)
    k++;
}
//do while loop
let i = 10;
do {
    console.log(i)
    i++;
} while (i<6);