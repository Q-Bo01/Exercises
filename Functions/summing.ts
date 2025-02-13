// Create a function called `summing()` that returns the sum of numbers
// from zero to the given parameter (as a number)

// Example: summing(3) should return 6, because 0 + 1 + 2 + 3 = 6

function summing(num: number): number {
  let sum = 0;

  for (let i: number = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log(summing(3));
