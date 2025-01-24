// change the number here to test out different sizes
const height: number = 4;

// Write a program that draws a pyramid of the specified height
//
// Example output when height is 4:
//
//    *
//   ***
//  *****
// *******

function pyramid(height: number): void {
  for (let i = 1; i <= height; i++) {
    let spaces: string = " ".repeat(height - i);
    let stars: string = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}
pyramid(height);
