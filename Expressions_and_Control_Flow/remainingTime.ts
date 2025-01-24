// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

function remainingTime(): void {
  let currentHours: number = 8;
  let currentMinutes: number = 45;
  let currentSeconds: number = 15;

  let secondsInAday: number = 24 * 60 * 60;
  let secondsPassed: number =
    currentHours * 60 * 60 + currentMinutes * 60 + currentSeconds;

  let secondsRemaining: number = secondsInAday - secondsPassed;

  console.log(secondsRemaining);
}

remainingTime();
