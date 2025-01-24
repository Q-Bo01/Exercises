// change the number here to test out different sizes
const size: number = 6;

// Write a program that draws a square with the main diagonal of the specified size
//
// Example output when size is 6:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%

function diagonal(size: number) {
  for (let i = 1; i <= size; i++) {
    let row = "";
    for (let j = 1; j <= size; j++) {
      if (i === 1 || i === size || j === 1 || j === size || i === j) {
        row += "%";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}

diagonal(4);
