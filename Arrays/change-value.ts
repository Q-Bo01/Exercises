// - Create an array of numbers
//   Example: [2, 5, 4, 9, 6, 7]
// - Change the value of the third element (4) to 8
// - Print the third element

let nums: number[] = [2, 5, 4, 9, 6, 7];

function changeElement(): void {
  let removed = nums.splice(2, 1, 8);
  console.log(removed);

  console.log(nums);
}

changeElement();
