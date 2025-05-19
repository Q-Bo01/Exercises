// Create an empty object where the keys are integers and the values are country names
// Assign the type Record<number, string> to the object
// Print out whether the object is empty or not
// Add the following key-value pairs to the object
//  | Key | Value    |
//  | 1   | USA      |
//  | 2   | Canada   |
//  | 3   | Germany  |
//  | 10  | France   |
//  | 20  | Japan    |
//  | 30  | Brazil   |
// Print all the keys
// Print all the values
// Add value Australia with the key 40
// Print how many key-value pairs are in the object
// Print the value that is associated with key 3
// Remove key 1 from the object
// Print whether there is an associated value with key 50 or not
// Remove all the key-value pairs
// Print how many key-value pairs are in the object
//
// Expected output
//
// true
// [ '1', '2', '3', '10', '20', '30' ]
// [ 'USA', 'Canada', 'Germany', 'France', 'Japan', 'Brazil' ]
// 7
// Germany
// false
// 0

function countryCodeMap() {
  let cities: Record<number, string> = {};
  console.log(Object.keys(cities).length === 0);

  cities[1] = "USA";
  cities[2] = "Canada";
  cities[3] = "Germany";
  cities[10] = "France";
  cities[20] = "Japan";
  cities[30] = "Brazil";
  console.log(Object.keys(cities));
  console.log(Object.values(cities));

  cities[40] = "Australia";
  console.log(Object.keys(cities).length);
  console.log(cities[3]);
  console.log(Object.hasOwnProperty(50));

  cities = {};
  console.log(Object.keys(cities).length);
}

countryCodeMap();
