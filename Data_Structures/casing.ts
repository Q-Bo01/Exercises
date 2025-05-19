//Create a function that take a string(in lower case) as a parameter
//and change every other letter to upper case and returns formated string
//as a result
//Example: banana => bAnAnA

const str: string = "i will become a programmer";

function casing(str: string): string {
  let result: string = "";

  for (let i: number = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      result += str[i].toLocaleUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(casing(str));
