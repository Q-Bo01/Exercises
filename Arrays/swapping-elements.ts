// - Create an array of strings
//   Example: `["first", "second", "third"]`
// - Swap the first and the last element of array programmatically
// - Print the swapped array into the console:
//   Example: [third, second, first]

let words: string[] = ["first", "second", "third", "fourth"];

function swap(): void {
  let temp: string = words[0];
  words[0] = words[words.length - 1];
  words[words.length - 1] = temp;

  console.log(words);
}

swap();
