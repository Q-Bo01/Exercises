// change the number here to test out different sizes
const size: number = 6;

// Write a program that draws a square of the specified size
//
// Example output when size is 6:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
function square(size: number): void {
  for (let i: number = 1; i <= size; i++) {
    if (i === 1 || i === size) {
      console.log("%".repeat(size));
    } else {
      console.log("%" + " ".repeat(size - 2) + "%");
    }
  }
}
square(size);
