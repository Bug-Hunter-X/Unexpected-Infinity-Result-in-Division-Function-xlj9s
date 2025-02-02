function foo(a, b) {
  if (a === null || b === null) {
    return 0; // intended behavior
  } else if (a === 0 || b === 0) {
    return 0; // intended behavior
  } else if (b === 0) {
    return 0; // Handle division by zero
  } else {
    return a / b; 
  }
}

console.log(foo(10, 0)); // Output: 0
console.log(foo(10, null)); // Output: 0
console.log(foo(0, 10)); // Output: 0
console.log(foo(null, 10)); // Output: 0