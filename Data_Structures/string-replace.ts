//Create function that replace the word "banana" in the sentence
//with a word "time"
//Print out corrected sentence

const sentence: string = "Once upon a banana ...";

function replace(sentence: string, wordToreplace: string, newWord: string) {
  console.log(sentence.replace(wordToreplace, newWord));
}

replace(sentence, "banana", "time");
