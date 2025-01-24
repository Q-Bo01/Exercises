// Create a program which prints the multiplication table
// for a given number
//
// Example:
// The number 10 should print:
//
// 1 * 10 = 10
// 2 * 10 = 20
// 3 * 10 = 30
// 4 * 10 = 40
// 5 * 10 = 50
// 6 * 10 = 60
// 7 * 10 = 70
// 8 * 10 = 80
// 9 * 10 = 90
// 10 * 10 = 100

function multiplications(n: number): void {
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} * ${n} = ${i * n}`);
  }
}

multiplications(10);
