//Create a function that takes a string
//search for a palindromes of length at least 3 within this string
//and returns them in an array

let str: string = "racecar";

function isPalindrome(str: string): boolean {
  return str === str.split("").reverse().join("");
}

function searchForPalindromes(str: string): string[] {
  let palindromes: string[] = [];

  for (let i: number = 0; i < str.length; i++) {
    for (let j: number = i + 3; j <= str.length; j++) {
      //Length at least 3
      let substr = str.substring(i, j);
      if (isPalindrome(substr)) {
        palindromes.push(substr);
      }
    }
  }
  return palindromes;
}

console.log(searchForPalindromes(str));
