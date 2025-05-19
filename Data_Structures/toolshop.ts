// Store the following tools with their prices in an object (Record<string, number>):
//   | Tool            | Price  |
//   | --------------- | ------ |
//   | Hammer          | 15.50  |
//   | Screwdriver     | 7.25   |
//   | Wrench          | 12.80  |
//   | Pliers          | 9.60   |
//   | Drill           | 45.30  |
//   | Saw             | 22.75  |
//   | Tape Measure    | 5.90   |
//   | Nails           | 3.40   |
//   | Screws          | 4.50   |
//
// Store Jake's shopping list similarly:
//   | Tool           | Amount |
//   | -------------- | ------ |
//   | Screwdriver   | 2      |
//   | Wrench        | 1      |
//   | Drill         | 1      |
//   | Saw           | 1      |
//   | Nails         | 3      |
//
// Store Emma's shopping list too:
//   | Tool          | Amount |
//   | ------------- | ------ |
//   | Hammer       | 1      |
//   | Screwdriver  | 1      |
//   | Wrench       | 2      |
//   | Pliers       | 1      |
//   | Saw          | 2      |
//   | Tape Measure | 1      |
//   | Screws       | 3      |
//
// Create an application which prints out the answers to the following questions:
//   - How much does Jake pay?
//   - How much does Emma pay?
//   - Who buys more Screwdrivers?
//   - Who buys more Pliers?
//   - Who buys more Bolts?
//   - Who buys more Saws?
//   - Who buys more different tools?
//   - Who buys more items? (more pieces)
//
// The expected output looks like the following:
// 87.95
// 89.7
// Jake
// Emma
// no one
// Emma
// Emma
// Emma

function toolShopping() {
  const toolPrices: Record<string, number> = {
    Hammer: 15.5,
    Screwdriver: 7.25,
    Wrench: 12.8,
    Pliers: 9.6,
    Drill: 45.3,
    Saw: 22.75,
    "Tape Measure": 5.9,
    Nails: 3.4,
    Screws: 4.5,
  };

  const jakeShoppingList: Record<string, number> = {
    Screwdriver: 2,
    Wrench: 1,
    Drill: 1,
    Saw: 1,
    Nails: 3,
  };

  const emmaShoppingList: Record<string, number> = {
    Hammer: 1,
    Screwdriver: 1,
    Wrench: 2,
    Pliers: 1,
    Saw: 2,
    "Tape Measure": 1,
    Screws: 3,
  };

  //   - How much does Jake pay?
  let jakesTotal: number = 0;
  for (const item in jakeShoppingList) {
    const quantity: number = jakeShoppingList[item];
    const price: number = toolPrices[item];
    jakesTotal += quantity * price;
  }
  console.log(`Jake paid: ${jakesTotal}`);

  //   - How much does Emma pay?
  let emmasTotal: number = 0;
  for (const item in emmaShoppingList) {
    const quantity: number = emmaShoppingList[item];
    const price: number = toolPrices[item];
    emmasTotal += quantity * price;
  }
  console.log(`Emma paid: ${emmasTotal}`);

  // Who buys more Screwdrivers?
  if (jakeShoppingList["Screwdriver"] < emmaShoppingList["Screwdriver"]) {
    console.log("Emma");
  } else {
    console.log("Jake");
  }

  //Who buys more Pliers?
  const jakePliers: number = jakeShoppingList["Pliers"] ?? 0;
  const emmaPliers: number = emmaShoppingList["Pliers"] ?? 0;

  if (jakePliers > emmaPliers) {
    console.log("Jake");
  } else if (jakePliers < emmaPliers) {
    console.log("Emma");
  } else {
    console.log("no one");
  }

  //Who buys more Bolts?
  const jakeBolts: number = jakeShoppingList["Bolts"] ?? 0;
  const emmaBolts: number = emmaShoppingList["Bolts"] ?? 0;

  if (jakeBolts > emmaBolts) {
    console.log("Jake");
  } else if (jakeBolts < emmaBolts) {
    console.log("Emma");
  } else {
    console.log("no one");
  }

  //Who buys more Saws?
  const jakeSaws: number = jakeShoppingList["Saw"] ?? 0;
  const emmaSaws: number = emmaShoppingList["Saw"] ?? 0;

  if (jakeSaws > emmaSaws) {
    console.log("Jake");
  } else if (jakeSaws < emmaSaws) {
    console.log("Emma");
  } else {
    console.log("no one");
  }

  //Who buys more different tools?
  function toolSorter(shopingList: Record<string, number>): string[] {
    let toolList: string[] = [];
    for (const [key, value] of Object.entries(shopingList)) {
      toolList.push(key);
    }
    return toolList;
  }

  if (
    toolSorter(jakeShoppingList).length > toolSorter(emmaShoppingList).length
  ) {
    console.log("Jake");
  } else if (
    toolSorter(jakeShoppingList).length < toolSorter(emmaShoppingList).length
  ) {
    console.log("Emma");
  } else {
    console.log("no one");
  }

  //Who buys more items? (more pieces)?
  function toolCounter(shopingList: Record<string, number>): number {
    let count: number = 0;
    for (const item in shopingList) {
      count += shopingList[item];
    }
    return count;
  }

  if (toolCounter(jakeShoppingList) > toolCounter(emmaShoppingList)) {
    console.log("Jake");
  } else if (toolCounter(jakeShoppingList) > toolCounter(emmaShoppingList)) {
    console.log("Emma");
  } else {
    console.log("no one");
  }
}

toolShopping();
