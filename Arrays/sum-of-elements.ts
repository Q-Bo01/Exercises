// - Create an array of numbers named `nums`
//   containing numbers 45, 22, 36, 51
// - Print the sum of the first and the last element

let nums: number[] = [45, 22, 36, 51];

function sum(): void {
  console.log(nums[0] + nums[nums.length - 1]);
}

sum();
