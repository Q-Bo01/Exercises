// Fix this quote!
// Insert the words "comes from persistence and" between the words "Success" and "Hard work"!

function fixQuote() {
  let quote = `Success Hard work and perseverance lead to great achievements.`;

  let correctedQuote: string = quote.replace(
    "Success",
    "Success comes from persistence."
  );

  console.log(correctedQuote);
}

fixQuote();
