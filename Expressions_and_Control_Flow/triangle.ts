// change the number here to test out different sizes
const height: number = 4;

// Draw a triangle of the specified height using * characters.
//
// Example output when height is 4:
//
// *
// **
// ***
// ****

function triangle(height: number): void {
  for (let i = 1; i <= height; i++) {
    console.log("*".repeat(i));
  }
}

triangle(height);
