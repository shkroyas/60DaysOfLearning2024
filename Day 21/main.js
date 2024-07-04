const fs = require("fs")

 
console.log("starting")

fs.writeFile("royas2.txt", "Hello World", ()=>{
    console.log("done")
    fs.readFile("royas2.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("royas.txt", "helloooo", (e, d)=>{
    console.log(d)
})

console.log("ending")