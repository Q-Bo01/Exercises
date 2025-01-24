// Write a program that calculates the sum and the average from 1 to a given number
// Example input: 5
// Example output:
// Sum: 15
// Average: 3

function printSumAndAverage(number: number): void {
  let sum: number = 0;
  let average: number = 0;

  for (let i = 1; i <= number; i++) {
    sum += i;
    average = sum / number;
  }
  console.log(`Sum: ${sum}`);
  console.log(`Average: ${average}`);
}

printSumAndAverage(15);
