//Create a program to correct a typo in a URL address
// change the "https//www.techworld.com/r/hackadnews" to "https//www.techworld.com/r/hackernews"

const url: string = "https//www.techworld.com/r/hackadnews";

function typoFix(str: string): void {
  let result: string = str.replace("ad", "er");
  console.log(result);
}

typoFix(url);
