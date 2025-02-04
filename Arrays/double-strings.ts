//Create an array of strings
//Example: ["Apple", "Banana", "Kiwi", "Peach"]
//Double all the strings in the array, and print the result
//Function should print out [ 'AppleApple', 'BananaBanana', 'KiwiKiwi', 'PeachPeach' ]

let fruits: string[] = ["Apple", "Banana", "Kiwi", "Peach"];

function doubleStrings(): void {
  const doubles = fruits.map((element) => element + element);
  console.log(doubles);
}

doubleStrings();
