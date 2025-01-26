function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Return 0 instead of null for a more robust solution
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-number inputs
  }
  return a + b; 
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 0
console.log(foo(1, null)); // 0
console.log(foo(null, null)); // 0
console.log(foo('a', 2)); // NaN
console.log(foo(1, 'b')); // NaN