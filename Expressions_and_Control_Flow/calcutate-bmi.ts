"use strict";

// Calculate and print the Body Mass Index (BMI)

function calculateBMI(): void {
  let weightInKg: number = 86.2;
  let heightInMeters: number = 1.78;

  // Write your code here:
  const bmi = weightInKg / (heightInMeters * heightInMeters);
  console.log(bmi);
}

calculateBMI();
