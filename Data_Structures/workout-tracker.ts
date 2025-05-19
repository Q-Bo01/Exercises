// Create an array with the following values: 45, 60, 30, 90, 50, and 75
// These values represent the number of minutes spent exercising each day in a week.

// Create an application that prints out the answers to the following questions:
// - How many total minutes did we exercise?
// - What was the longest workout session?
// - What was the shortest workout session?
// - What was the average workout duration?

// Expected output:
//
// 350
// 90
// 30
// 58.333333333333336

function workoutTracker() {
  const dailyMins: number[] = [45, 60, 30, 90, 50, 75];
  let totalTime = 0;
  let longestTime: number = dailyMins[0];
  let shortestTime: number = dailyMins[0];
  let average: number = 0;

  for (let i: number = 0; i < dailyMins.length; i++) {
    totalTime += dailyMins[i];

    if (dailyMins[i] > longestTime) {
      longestTime = dailyMins[i];
    }

    if (dailyMins[i] < shortestTime) {
      shortestTime = dailyMins[i];
    }

    average = totalTime / dailyMins.length;
  }
  console.log(totalTime);
  console.log(longestTime);
  console.log(shortestTime);
  console.log(average);
}

workoutTracker();
