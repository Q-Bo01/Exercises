//Create two arrays of numbers
//First containing 3 numbers, second one 4 numbers
//Write a function that compares the length of the arrays
//and print out which one is longer

let arr1: number[] = [1, 2, 3];

let arr2: number[] = [4, 5, 6, 7];

function lengthComparing(arr1: number[], arr2: number[]): void {
  if (arr1.length > arr2.length) {
    console.log("First array is longer.");
  } else if (arr1.length < arr2.length) {
    console.log("Second array is longer.");
  } else {
    console.log("Arrays are of same length.");
  }
}

lengthComparing(arr1, arr2);
