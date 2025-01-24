// Create a program that prints all the even numbers between 0 and 300
// Each number should be on a new line

function printOdd() {
  let num: number = 0;

  while (num <= 300) {
    if (num % 2 != 0) {
      console.log(num);
    }
    num++;
  }
}

printOdd();
