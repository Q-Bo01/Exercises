"use strict";

function swapNumbers(numberToSwap1: number, numberToSwap2: number): void {
  const temp = numberToSwap1;
  numberToSwap1 = numberToSwap2;
  numberToSwap2 = temp;

  // Swap the values of the variables without changing theese 2 lines of code:
  console.log(numberToSwap1);
  console.log(numberToSwap2);
}

swapNumbers(420, 233);
