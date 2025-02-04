// - Create a two-dimensional list (array of strings)
//   that contains different types of fruits.
// - In `fruits[0]`, store citrus fruits:
//   `"orange", "lemon", "lime", "grapefruit"`
// - In `fruits[1]`, store berries:
//   `"strawberry", "blueberry", "raspberry"`
// - In `fruits[2]`, store tropical fruits:
//   `"mango", "pineapple", "banana", "coconut"`
// - Print the array in the following format:
//
//   orange, lemon, lime, grapefruit
//   strawberry, blueberry, raspberry
//   mango, pineapple, banana, coconut

let fruits: string[][] = [
  ["orange", "lemon", "lime", "grapefruit"],
  ["strawberry", "blueberry", "raspberry"],
  ["mango", "pineapple", "banana", "coconut"],
];

function listFruits(): void {
  fruits.forEach((element) => console.log(element.join(", ")));
}

listFruits();
