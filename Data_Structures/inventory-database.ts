// We are going to store our store inventory in an object
// where the keys will be the item's name
// and their values will be the item's price in cents
// Create an "inventory" object with the following key-value pairs:
//    | Item name (key)    | Price (value) |
//    | :----------------- | :------------ |
//    | Notebook           | 1200          |
//    | Pen                | 150           |
//    | Pencil             | 100           |
//    | Eraser             | 80            |
//    | Marker             | 250           |
//    | Stapler            | 750           |
// Assign the type Record<string, number> to the object
// Create an application which prints out the answers to the following questions:
//  - How much is the Stapler?
//  - Which is the cheapest item?
//  - What is the highest price in the list?
//  - How many items cost less than 500?
//  - Is there any item priced exactly at 300? (print "yes" or "no")
//  - Which is the second cheapest item?

import { log } from "console";

// Expected output:
// 750
// Eraser
// 1200
// 4
// no
// Pencil

const inventory: Record<string, number> = {
  Notebook: 1200,
  Pen: 150,
  Pencil: 100,
  Eraser: 80,
  Marker: 250,
  Stapler: 750,
};

function inventoryDatabase() {
  //How much is the Stapler?
  console.log(inventory["Stapler"]);

  //Which is the cheapest item?
  let cheapestItem: string = "";
  let lowestPrice: number = Infinity;

  for (const [item, price] of Object.entries(inventory)) {
    if (price < lowestPrice) {
      lowestPrice = price;
      cheapestItem = item;
    }
  }
  console.log(cheapestItem);

  //What is the highest price in the list?
  let mostExpensiveItem: string = "";
  let highestPrice: number = 0;

  for (const [item, price] of Object.entries(inventory)) {
    if (price > highestPrice) {
      highestPrice = price;
      mostExpensiveItem = item;
    }
  }

  console.log(mostExpensiveItem);

  //How many items cost less than 500?
  let count: number = 0;
  for (const [item, price] of Object.entries(inventory)) {
    if (price < 500) {
      count++;
    }
  }

  console.log(count);

  // Is there any item priced exactly at 300? (print "yes" or "no")
  let found = false;
  for (const [item, price] of Object.entries(inventory)) {
    if (price === 300) {
      found = true;
      break;
    }
  }
  console.log(found ? "yes" : "no");

  //Which is the second cheapest item?
  let itemCheapest: string = "";
  let priceLowest: number = Infinity;
  let secondCheapestItem: string = "";
  let secondCheapestPrice: number = Infinity;

  for (const [item, price] of Object.entries(inventory)) {
    if (price < priceLowest) {
      secondCheapestPrice = priceLowest;
      secondCheapestItem = itemCheapest;

      priceLowest = price;
      itemCheapest = item;
    } else if (price < secondCheapestPrice && price !== priceLowest) {
      secondCheapestPrice = price;
      secondCheapestItem = item;
    }
  }
  console.log(secondCheapestItem + " : " + secondCheapestPrice);
}

inventoryDatabase();
