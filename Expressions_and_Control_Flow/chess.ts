// change the number here to test out different sizes
const size: number = 8;

// Create function that draws a chess table of the specified size
//
// Example output when size is 8:
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %

function chess(size: number): void {
  for (let i = 1; i <= size; i++) {
    let row = "";
    for (let j = 1; j <= size; j++) {
      if (i % 2 === 0 && j % 2 !== 0) {
        row += "%";
      } else if (i % 2 !== 0 && j % 2 === 0) {
        row += "%";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}

chess(size);
