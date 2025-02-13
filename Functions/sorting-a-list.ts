//Create a function that takes an array of numbers and  as a parameter
//and return a sorted array in descending

const arr: number[] = [2, 1, 5, 4, 3];

function arraySort(arr: number[]): number[] {
  return arr.sort((a, b) => b - a);
}

console.log(arraySort(arr));
