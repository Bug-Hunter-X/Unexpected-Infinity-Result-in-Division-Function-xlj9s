# Unexpected Infinity Result in Division Function

This repository demonstrates a subtle bug in a JavaScript function that deals with division.  The function is designed to handle null and zero inputs gracefully, but it unexpectedly returns `Infinity` when dividing by zero.

## Bug Description

The `foo` function aims to return 0 if either input `a` or `b` is `null` or `0`. However, when `b` is 0 and `a` is not null or 0, the function returns `Infinity` instead of 0.

## Bug Reproduction

1. Clone this repository.
2. Navigate to the project directory.
3. Run `node bug.js`.  Observe the unexpected `Infinity` output.

## Solution

The solution involves adding a check specifically for division by zero before performing the division.  See `bugSolution.js` for the corrected code.

## Lessons Learned

This example highlights the importance of thorough error handling and checking for edge cases, especially when dealing with potentially undefined or zero values in arithmetic operations.