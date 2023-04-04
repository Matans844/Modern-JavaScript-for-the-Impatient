let numbers = [3, 1, 4, 1, 5, 9];
let [f, s, ...others] = numbers;
console.log(others); // Output: [4, 1, 5, 9]
numbers[2] = 42;
console.log(others); // Output: [42, 1, 5, 9]
others[0] = 100;
console.log(numbers); // Output: [3, 1, 100, 1, 5, 9]