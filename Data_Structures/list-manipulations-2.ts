// Create an array "cityListA" which contains the following values
//   "New York", "Los Angeles", "Chicago", "Houston", "Miami"
// Create a new array cityListB with the values of cityListA
// Print out whether cityListA contains "Houston" or not
// Remove "Houston" from cityListB
// Add "San Francisco" to cityListA after the 4th element
// Compare the size of cityListA and cityListB
//   and print out whether they have the same size (boolean)
// Get and print the index of "Los Angeles" from cityListA
// Get and print the index of "Houston" from cityListB
// Add "Seattle" and "Boston" to cityListB in a single statement
// Print out the 3rd element from cityListA
// Print all elements of cityListA
// Print all elements of cityListB
//
// Expected output
//
// true
// false
// 1
// -1
// Chicago
// New York
// Los Angeles
// Chicago
// Houston
// San Francisco
// Miami
// New York
// Los Angeles
// Chicago
// Miami
// Seattle
// Boston

function cityListOperations() {
  const cityListA: string[] = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Miami",
  ];
  const cityListB: string[] = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Miami",
  ];

  console.log(cityListA.includes("Houston"));
  cityListB.splice(3, 1);
  cityListA.splice(4, 0, "San Francisco");
  console.log(cityListA.length === cityListB.length);
  console.log(cityListA.indexOf("Los Angeles"));
  console.log(cityListB.indexOf("Houston"));
  cityListB.push("Seattle", "Boston");
  console.log(cityListA[2]);

  cityListA.forEach((city) => console.log(city));

  cityListB.forEach((city) => console.log(city));
}

cityListOperations();
