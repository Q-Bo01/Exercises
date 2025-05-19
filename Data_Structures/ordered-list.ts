//Write a function takes string array as argument and returns ordered list
//Example:  ["Matrix", "Serenity", "The Stargate",]
//Should return: 1. Matrix
//               2. Serenity
//               3. The Stargate

function orderedList(arr: string[]) {
  for (let i: number = 0; i < arr.length; i++) {
    console.log(i + 1 + "." + " " + arr[i]);
  }
}

const arr: string[] = ["Matrix", "Serenity", "The Stargate"];

orderedList(arr);
