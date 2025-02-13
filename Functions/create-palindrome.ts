//Create function that take a string as a parameter
//and create a palindrome of it and returns it

let str: string = "Reverse";

function palindrome(str: string): string {
  return str + str.split("").reverse().join("");
}

console.log(palindrome(str));
