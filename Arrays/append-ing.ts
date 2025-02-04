// - Create an array variable named `verbs`
//   with the following content:
//  `["jump", "read", "sing", "paint", "cook", "climb"]`
//
// - Add an `"ing"` at the end of all elements
// - Print the 'fixed' array to the console:
//   ["jumping", "reading", "singing", "painting", "cooking", "climbing"]

let verbs: string[] = ["jump", "read", "sing", "paint", "cook", "climb"];

function appendIng() {
  for (let i: number = 0; i < verbs.length; i++) {
    verbs[i] += "ing";
  }
  console.log(verbs);
}

appendIng();
