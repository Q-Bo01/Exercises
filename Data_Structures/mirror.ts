// Create a function "mirrorText" which takes a string input and returns it reversed
// Use it on the given quote below to check it!

let quote = `.erutangis s'eno si ytilanosrep ruoy ,ecnetnes siht gnidaer er'uoy fI`;

function mirrorText(str: string): string {
  return str.split("").reverse().join("");
}
console.log(mirrorText(quote));
