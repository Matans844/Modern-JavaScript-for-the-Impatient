// See discussion with ChatGPT: JavaScript: NaN vs null vs undefined
// undefined is both a primitive and a global variable in JavaScript.
// These are two different things
var undefined = "hello";
var x;
console.log(x); // undefined
console.log(undefined); // "hello"


// The following casues an error:
// var null = 4;

// console.log(null)