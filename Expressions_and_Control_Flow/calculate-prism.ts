// Write a program that stores 3 dimensions of a rectangular prism as variables (numbers)
// The program should calculate the surface area and volume of the rectangular prism.
//
// Set the 3 dimensions to 12.3, 9.4, 7.8 and your program should
// produce the following output:
//
// Surface Area: 569.76
// Volume: 901.84

function calculatePrism(): void {
  const height: number = 12.3;
  const width: number = 9.4;
  const length: number = 7.8;

  let surface: number = 2 * (length * width + width * height + length * height);
  let volume: number = height * width * length;

  console.log(`Surface Area: ${surface.toFixed(2)}`);
  console.log(`Volume: ${volume.toFixed(2)}`);
}

calculatePrism();
