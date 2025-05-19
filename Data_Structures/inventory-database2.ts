// We are going to store our products in an object
// where the keys will be representing the product's name
// and their values will be representing the product's price
// Create a "items" object with the following key-value pairs:
//    | Item name (key)    | Price (value) |
//    | :----------------- | :------------ |
//    | Notebook           | 120           |
//    | Pen                | 35            |
//    | Backpack           | 900           |
//    | Pencil             | 25            |
//    | Water Bottle       | 180           |
//    | Headphones         | 750           |
// Assign the type Record<string, number> to the object
// Create an application which prints out the answers to the following questions:
//  - Which items cost less than 100? (print their names line by line)
//  - Which items cost more than 100? (name + price separated with a colon)

// Expected output:
//
// Pen
// Pencil
// Notebook: 120
// Backpack: 900
// Water Bottle: 180
// Headphones: 750

const items: Record<string, number> = {
  Notebook: 120,
  Pen: 35,
  Backpack: 900,
  Pencil: 25,
  "Water Bottle": 180,
  Headphones: 750,
};

function itemDatabase() {
  for (const [item, price] of Object.entries(items)) {
    // Which items cost less than 100? (print their names line by line)
    if (price < 100) {
      console.log(item);
    }
  }
  // Which items cost more than 100? (name + price separated with a colon)
  for (const [item, price] of Object.entries(items)) {
    if (price > 100) {
      console.log(item + " : " + price);
    }
  }
}

itemDatabase();
