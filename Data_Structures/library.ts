// Create an object with the following key-value pairs
//   | Book Title (key)           | ISBN (value)        |
//   | -------------------------- | ------------------- |
//   | "To Kill a Mockingbird"    | 978-0-06-112008-4  |
//   | "1984"                     | 978-0-452-28423-4  |
//   | "The Great Gatsby"         | 978-0-7432-7356-5  |
//   | "Moby-Dick"                | 978-0-14-243724-7  |
//   | "Pride and Prejudice"      | 978-0-19-953556-9  |
//
// Assign the type Record<string, string> to the object
// Create an application which prints out the answers to the following questions:
//   - What is the ISBN of "1984"?
//   - Which book has the ISBN "978-0-14-243724-7"?
//   - Do we have "The Catcher in the Rye" in our library? (yes/no)

// Expected output:
//
// 978-0-452-28423-4
// Moby-Dick
// no

function librarySystem() {
  const library: Record<string, string> = {
    "To Kill a Mockingbird": "978-0-06-112008-4",
    "1984": "978-0-452-28423-4",
    "The Great Gatsby": "978-0-7432-7356-5",
    "Moby-Dick": "978-0-14-243724-7",
    "Pride and Prejudice": "978-0-19-953556-9",
  };

  console.log(library["1984"]);

  for (const [key, value] of Object.entries(library)) {
    if (value === "978-0-14-243724-7") {
      console.log(key);
    }
  }

  if (library.hasOwnProperty("The Catcher in the Rye")) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
librarySystem();
