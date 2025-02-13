// Create function that takes an array of numbers
// as a parameter and returns an array of unique numbers (occurs only once)

function uniques(numbers: number[]): number[] {
  return [...new Set(numbers)];
}

// Example
console.log(uniques([2, 21, 45, 21, 56, 66, 2, 45]));
// should print: `[2, 21, 45, 56, 66]`
