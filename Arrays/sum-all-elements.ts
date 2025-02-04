// Create an array of numbers
// Example:  `[4, 6, 2, 7, 8]`
// Print the sum of all elements in the array

let nums: number[] = [4, 6, 2, 7, 8];

function sumAll(): void {
  let sum: number = 0;

  for (let i: number = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(sum);
}

sumAll();
