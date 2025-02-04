// Create an array of numbers
// Example: [2, 5, 4, 9, 6, 7]
// Increment second element by accessing it
// and print it to console

let nums: number[] = [2, 5, 4, 9, 6, 7];

function incrementElement(): void {
  nums[1] += 1;

  console.log(nums[1]);
}

incrementElement();
