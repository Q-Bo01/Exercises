// change the number here to test out different sizes
const height: number = 4;

// Write a program that draws a diamond of the specified height
//
// Example output when height is 4:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// Note: the height of the diamond is taken from its base
// (where it is the widest) to the top.
// The total number of lines produced is 2 * height - 1

function diamond(height: number): void {
  for (let i = 1; i <= height; i++) {
    let spaces: string = " ".repeat(height - i);
    let stars: string = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }

  for (let i = height - 1; i >= 1; i--) {
    let spaces: string = " ".repeat(height - i);
    let stars: string = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

diamond(height);
