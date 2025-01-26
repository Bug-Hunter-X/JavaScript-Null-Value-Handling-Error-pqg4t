# JavaScript Null Value Handling Bug

This repository demonstrates a common error in JavaScript: unexpected null values. The `bug.js` file contains a function that fails to handle cases where either input is null. The `bugSolution.js` file shows how to fix this issue by explicitly handling null values.

## Bug Description
The `foo` function in `bug.js` attempts to add two numbers together, but it does not handle null inputs correctly. If either input is null, the function produces an unexpected output. 

## Solution
The solution is to add explicit checks for null values at the beginning of the function.  If either input is null, the function returns a meaningful value (in this case, `null`).