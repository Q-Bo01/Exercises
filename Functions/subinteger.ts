// Create a `findSubintIndex` function that takes a digit
// and an array of numbers as parameters and returns the indices of the numbers in the array
// which contain the given digit or returns an empty array
// if no number in the array contains the given digit

function findSubintIndex(num: number, numArr: number[]): number[] {
  let indexArr: number[] = [];

  for (let i: number = 0; i < numArr.length; i++) {
    if (numArr[i].toString().indexOf(num.toString()) > -1) {
      indexArr.push(numArr.indexOf(numArr[i]));
    }
  }
  return indexArr;
}

// Example
console.log(findSubintIndex(2, [2, 12, 34, 51, 62]));
// should print: `[0, 1, 4]`

console.log(findSubintIndex(8, [2, 12, 34, 51, 62]));
// should print: '[]'
