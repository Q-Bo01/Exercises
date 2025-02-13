//Create a function that takes two words
//and checks if the second word is an anagram of the first one

function anagram(word1: string, word2: string): boolean {
  return (
    word1.toLowerCase().split("").sort().join("") ===
    word2.toLowerCase().split("").sort().join("")
  );
}

console.log(anagram("dog", "bod")); // false
console.log(anagram("listen", "silent")); // true
console.log(anagram("triangle", "integral")); // true
console.log(anagram("hello", "world")); // false
