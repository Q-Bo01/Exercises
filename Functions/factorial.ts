// - Create a function called `factorial()`
//   that returns the factorial of its input

// - Example: calculateFactorial(5) should return 120, because 1 * 2 * 3 * 4 * 5 = 120

function factorial(num: number): number {
  let sum = 1;

  for (let i: number = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
}

console.log(factorial(5));
