function performOperations(): void {
  let a: number = 5;
  // increase the value of variable "a" by 15
  a += 15;
  console.log(a);

  let b: number = 120;
  // decrease the value of b by 13
  b -= 13;
  console.log(b);

  let c: number = 30;
  // double the value of c
  c *= 2;
  console.log(c);

  let d: number = 250;
  // divide the value of d by 10
  d /= 10;
  console.log(d);

  let e: number = 10;
  // cube the value of e
  e **= 3;
  console.log(e);

  let f1: number = 200;
  let f2: number = 450;
  // determine if f1 is greater than f2 (print as a boolean)
  console.log(f1 > f2);

  let g1: number = 400;
  let g2: number = 180;
  // determine if double the value of g2 is greater than g1 (print as a boolean)
  console.log(g1 < g2 * 2);

  let h: number = 987654321012345;
  // determine if h has 17 as a divisor (print as a boolean)
  console.log(h % 17 === 0);

  let i1: number = 15;
  let i2: number = 4;
  // determine if i1 is greater than i2 squared and smaller than i2 cubed (print as a boolean)
  console.log(i1 > i2 * i2 && i1 < i2 ** 3);

  let j: number = 2340;
  // determine if j is divisible by 6 or 8 (print as a boolean)
  console.log(j % 6 === 0 || j % 8 === 0);
}

performOperations();
