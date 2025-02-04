const size: number = 4;

// Write a function that creates 2D array of numbers
// of the specified size with the value of 1 on the main antidiagonal
// and print out the result to standard output
//
// Example:
//
// 0 0 0 1
// 0 0 1 0
// 0 1 0 0
// 1 0 0 0

function createAntidiagonalMatrix(size: number): number[][] {
  let arr: number[][] = [];

  for (let i: number = 0; i < size; i++) {
    arr[i] = [];
    for (let j: number = 0; j < size; j++) {
      if (arr[i] === arr[size - 1 - j]) {
        arr[i].push(1);
      } else {
        arr[i].push(0);
      }
    }
  }
  return arr;
}

function printMatrix(matrix: number[][]): void {
  matrix.forEach((row) => console.log(row.join(" ")));
}

let matrix: number[][] = createAntidiagonalMatrix(size);
printMatrix(matrix);
