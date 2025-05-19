// Create an empty array that will contain city names (strings)
// Assign the type string[] to the array
// Print out the number of elements in the array
// Add "New York" to the array
// Print out whether the array is empty or not
// Add "Tokyo" to the array
// Add "Berlin" to the array
// Print out the number of elements in the array
// Print out the 2nd element
// Iterate through the array and print out each city name one by one
// Iterate through the array again and print all values with an index number
// Remove the 1st element
// Iterate through the list in reversed order and print out each city
// Remove all elements
// Print out the number of elements in the list

// The result should look like this in the console:
// 0
// false
// 3
// Tokyo
// New York
// Tokyo
// Berlin
// 1. New York
// 2. Tokyo
// 3. Berlin
// Berlin
// Tokyo
// 0

function cityListManager() {
  let cities: string[] = [];
  console.log(cities.length);
  cities.push("New York");
  console.log(cities.length === 0);
  cities.push("Tokyo", "Berlin");
  console.log(cities.length);
  console.log(cities[1]);

  for (let i: number = 0; i < cities.length; i++) {
    console.log(cities[i]);
  }

  for (let i: number = 0; i < cities.length; i++) {
    console.log(i + 1 + "." + " " + cities[i]);
  }

  cities.splice(0, 1);

  for (let i: number = cities.length - 1; i >= 0; i--) {
    console.log(cities[i]);
  }
  cities = [];
  console.log(cities.length);
}

cityListManager();
