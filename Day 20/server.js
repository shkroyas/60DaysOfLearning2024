var slugify = require('slugify')

let a = slugify('some string') // some-string
console.log(a)

//using slugify
const b = slugify('some st&&*(^%$$^^&ring', '_')  // some_string
console.log(b)