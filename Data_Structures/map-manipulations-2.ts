// 1) Create an object with the following initial values
//    | Key               | Value                    |
//    | ----------------- | ------------------------ |
//    | 978-0-12345-678-9 | The Secret Code          |
//    | 978-0-54321-987-6 | Beyond the Horizon       |
//    | 978-0-11111-222-3 | Echoes of the Past       |
//    | 978-0-98765-432-1 | Into the Unknown         |
// 2) Assign the type Record<string, string> to the created object
// 3) Print all the key-value pairs in the following format:
//
// The Secret Code (ISBN: 978-0-12345-678-9)
// Beyond the Horizon (ISBN: 978-0-54321-987-6)
// Echoes of the Past (ISBN: 978-0-11111-222-3)
// Into the Unknown (ISBN: 978-0-98765-432-1)
//
// 4) Remove the key-value pair with key "978-0-11111-222-3"
// 5) Remove the key-value pair with value "Into the Unknown"
// 6) Add the following key-value pairs to the object
//    | Key               | Value                 |
//    | ----------------- | -------------------- |
//    | 978-0-24680-135-7 | Shadows of Tomorrow |
//    | 978-0-11223-445-5 | Whispers in the Wind |
// 7) Print whether there is an associated value with key "999-9-99999-999-9" or not
// 8) Print the value associated with key "978-0-11223-445-5"

// Expected console output:
//
// The Secret Code (ISBN: 978-0-12345-678-9)
// Beyond the Horizon (ISBN: 978-0-54321-987-6)
// Echoes of the Past (ISBN: 978-0-11111-222-3)
// Into the Unknown (ISBN: 978-0-98765-432-1)
// false
// Whispers in the Wind

function bookLibrary() {
  const books: Record<string, string> = {
    "978-0-12345-678-9": "The Secret Code",
    "978-0-54321-987-6": "Beyond the Horizon",
    "978-0-11111-222-3": "Echoes of the Past",
    "978-0-98765-432-1": "Into the Unknown",
  };

  Object.entries(books).forEach(([key, value]) => {
    console.log(`${value} (ISBN : ${key})`);
  });

  delete books["978-0-11111-222-3"];

  for (const [key, value] of Object.entries(books)) {
    if (value === "Into the Unknown") {
      delete books[key];
    }
  }

  books["978-0-24680-135-7"] = "Shadows of Tomorrow";
  books["978-0-11223-445-5"] = "Whispers in the Wind";

  console.log(books.hasOwnProperty("999-9-99999-999-9"));

  console.log(books["978-0-11223-445-5"]);
}

bookLibrary();
