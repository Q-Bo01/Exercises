// - Create a string variable named `typo` and assign the value `Banan` to it
// - Write a function that gets a string as an input,
//   appends an 'a' character to its end and returns with a string
// - Print the result of to the console

const typo: string = "Banan";

function append(str: string): string {
  return str + "a";
}

console.log(append(typo));
