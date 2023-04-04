let x = y = 10
y += 1
console.log(x)
console.log(y)
// Assignments such as y=10 have a value in JavaScript! Thus, they are expressions.
// Assignment expressions in JavaScript have right-to-left associativity.
// Logical expressions in JavaScript have left-to-right associativity.


let a = 10
let b = a
b += 1
console.log(a)
console.log(b)

// So there's no aliasing for primitive types in JavaScript