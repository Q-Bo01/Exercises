//  Write a program that takes two strings as a parameter
//  Returns the starting index of the substring
//  Returns `-1` if the substring is not in the first string

function findSubstr(): void {
  function substr(str: string, substr: string): number {
    if (str.includes(substr)) {
      return str.indexOf(substr);
    }

    return -1;
  }

  //  Example

  // should print: `6`
  console.log(substr("Hello world", "world"));

  // should print: `-1`
  console.log(substr("I'm pretty princess", "nice"));
}

findSubstr();
