'use strict'
const harry = {name : "Harry Smith", age: 42}

console.log(harry)

console.log(harry.toString())
// harry.toString() -> [object Object]

console.log({harry})
// {harry} -> {harry : harry}
// We got a new object, with a single property "harry", and the value of this property is the variable "harry".