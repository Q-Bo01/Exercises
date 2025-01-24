function evaluateConditions(): void {
  let x: number = 18;
  let result1: number = 0;

  // if x is even, increment result1 by 3
  if (x % 2 === 0) {
    console.log(result1);
  }

  let y: number = 25;
  let result2: string = "";

  // if y is between 15 and 30 set result2 to "Awesome!"
  // if less than 15 set result2 to "Too Low!",
  // if more than 30 set result2 to "Too High!"
  if (y >= 15 && y <= 30) {
    result2 = "Awesome!";
  } else if (y < 15) {
    result2 = "Too low!";
  } else {
    result2 = "Too High!";
  }

  console.log(result2);

  let z: number = 200;
  let points: number = 60;
  let hasReward: boolean = false;

  // if points are at least 60,
  // and hasReward is false decrement z by 3
  // if points are smaller than 60,
  // and hasReward is false decrement z by 1
  // if hasReward is true z should remain the same
  if (points >= 60 && hasReward === false) {
    z -= 3;
  } else if (points < 60 && hasReward === false) {
    z -= 1;
  }

  console.log(z);

  let n: number = 10;
  let duration: number = 250;
  let result3: string = "";

  // if n is divisible by 5
  // and duration is not more than 300
  // set result3 to "Verified"
  // if duration is more than 300
  // set result3 to "Timeout"
  // otherwise set result3 to "Keep Going!"
  if (n % 5 === 0 && duration < 300) {
    result3 = " Verified";
  } else if (duration > 300) {
    result3 = " Timeout";
  } else {
    result3 = "Keep Going!";
  }

  console.log(result3);
}

evaluateConditions();
